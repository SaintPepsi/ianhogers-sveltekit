/**********************************************************************************************************
 *   UTILITIES
 **********************************************************************************************************/
import { fetchedDatabases, getDatabase } from "$lib/utils/notion/api";

/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/
import type { MyNotionDatabaseKeys } from "$data/notion/databases";
import type {
    Block,
    BlockRecord,
    CollatedPageDataProperties,
    CollatedRelationBlock,
} from "$utils/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type CollatedDatabaseData = {
    [key in MyNotionDatabaseKeys]?: CollatedPageDataProperties[];
};
const collatedDatabases: CollatedDatabaseData = {};

/**
 * checks if the database has been fetched, if not, fetches it
 * returns the database response data
 */
async function retrieveDatabase<T extends MyNotionDatabaseKeys>(
    database_name: T,
): Promise<PageObjectResponse[]> {
    if (Object.hasOwn(fetchedDatabases, database_name)) {
        return fetchedDatabases[
            database_name
        ] as PageObjectResponse[];
    }

    return await getDatabase<T>(database_name);
}

export async function createCollatedDatabase<
    T extends MyNotionDatabaseKeys,
>(database_name: T): Promise<CollatedPageDataProperties[]> {
    // Fetch the database
    const databaseResults = await retrieveDatabase<T>(database_name);

    /**
     * Iterate through the database's pages
     */
    const collatedDatabaseDataProperties = await Promise.all(
        databaseResults.map(async (page) => {
            /**
             * Iterate through the page's properties
             */
            const pageDataProperties: CollatedPageDataProperties = {};

            for (const property_name in page.properties) {
                if (Object.hasOwn(page.properties, property_name)) {
                    const property = page.properties[
                        property_name
                    ] as Block;

                    property.type = property.type as any;

                    /**
                     * If the property is a relation, fetch the database for that relation
                     */
                    if (property.type === "relation") {
                        console.log("property_name", property_name);
                        const requiredDatabaseResults =
                            await retrieveDatabase(
                                property_name as MyNotionDatabaseKeys,
                            );

                        console.log(
                            "requiredDatabaseResults",
                            requiredDatabaseResults,
                        );
                        const newRelation = property.relation.map(
                            (relation) => {
                                return requiredDatabaseResults.find(
                                    (requiredDatabasePage) =>
                                        requiredDatabasePage.id ===
                                        relation.id,
                                );
                            },
                        );

                        const filteredRelation = newRelation.filter(
                            (relation) => relation,
                        ) as PageObjectResponse[];
                        const mappedNewRelation =
                            filteredRelation.map((relation) => {
                                return relation.properties as BlockRecord;
                            });

                        console.log("property", property);
                        console.log("property_name", property_name);
                        console.log(
                            "mappedNewRelation",
                            mappedNewRelation,
                        );

                        const newProperty: CollatedRelationBlock = {
                            type: property.type,
                            id: property.id,
                            relation:
                                mappedNewRelation as BlockRecord[],
                        };

                        pageDataProperties[property_name] =
                            newProperty;
                    } else {
                        pageDataProperties[property_name] = property;
                    }
                }
            }

            return pageDataProperties;
        }),
    );

    return collatedDatabaseDataProperties;

    // return databaseData as MyDatabasePropertiesData[T];
}

async function retrieveCollatedDatabase<
    T extends MyNotionDatabaseKeys,
>(database_name: T): Promise<CollatedPageDataProperties[]> {
    if (Object.hasOwn(collatedDatabases, database_name)) {
        return collatedDatabases[
            database_name
        ] as CollatedPageDataProperties[];
    }

    return await createCollatedDatabase(database_name);
}

export async function getCollatedDatabase<
    T extends MyNotionDatabaseKeys,
>(database_name: T): Promise<CollatedPageDataProperties[]> {
    return retrieveCollatedDatabase(database_name);
}
