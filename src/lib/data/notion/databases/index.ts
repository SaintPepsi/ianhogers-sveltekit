/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import type {
    PageObjectResponse,
    QueryDatabaseResponse,
    PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/
import type {
    FilesBlock,
    RelationBlock,
    RichTextBlock,
    TitleBlock,
} from "$utils/notion";

/**
 * Database properties Types
 */
/** Projects */
export interface ProjectsDatabaseProperties {
    name: TitleBlock;
    full_name: RichTextBlock;
    logo: FilesBlock;
    page_content: RelationBlock;
    nav_title: RichTextBlock;
    tags: RelationBlock;
    solutions: RelationBlock;
}

/** Tags */
export interface TagsDatabaseProperties {
    name: TitleBlock;
    solutions: RelationBlock;
    projects: RelationBlock;
}

/**
 * database properties data Types
 */
/** Projects */
export interface ProjectsDatabasePropertiesData
    extends Omit<
        ProjectsDatabaseProperties,
        "tags" | "solutions" | "page_content"
    > {
    tags: TagsDatabasePropertiesData[];
}

/** Tags */
export interface TagsDatabasePropertiesData
    extends Omit<TagsDatabaseProperties, "solutions" | "projects"> {
    projects: ProjectsDatabasePropertiesData[];
}

/**
 * Properties Type Collator
 */
export interface MyDatabaseProperties {
    projects: ProjectsDatabaseProperties;
    tags: TagsDatabaseProperties;
}

export interface MyDatabasePropertiesData {
    projects: ProjectsDatabasePropertiesData;
    tags: TagsDatabasePropertiesData;
}

export type MyNotionDatabaseKeys = keyof MyDatabaseProperties;

export interface ControlledPageObjectResponse<
    T extends MyNotionDatabaseKeys,
> extends Omit<PageObjectResponse, "properties"> {
    properties: MyDatabaseProperties[T];
}

export interface ControlledPartialPageObjectResponse
    extends PartialPageObjectResponse {}

export type PossibleControlledResponses<
    T extends MyNotionDatabaseKeys,
> =
    | ControlledPageObjectResponse<T>
    | ControlledPartialPageObjectResponse;

export interface ControlledQueryDatabaseResponse<
    T extends MyNotionDatabaseKeys,
> extends Omit<QueryDatabaseResponse, "results"> {
    results: Array<PossibleControlledResponses<T>>;
}
