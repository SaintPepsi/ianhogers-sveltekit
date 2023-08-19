/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import { error } from "@sveltejs/kit";
import { Client, isFullBlock, isFullPage } from "@notionhq/client";
import { NOTION_TOKEN } from "$env/static/private";

/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/
import { registeredNotionDatabases } from "$lib/data/notion/config";
import type { MyNotionDatabaseKeys } from "$data/notion/databases";
import type { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

/**
 * Initialize the Notion client
 */
const notionClient = new Client({
    auth: NOTION_TOKEN,
});

type FetchedDatabaseResponses = {
    [key in MyNotionDatabaseKeys]?: PageObjectResponse[];
};
export const fetchedDatabases: FetchedDatabaseResponses = {};

/**
 * Fetches the database from Notion
 */
export async function getDatabase<T extends MyNotionDatabaseKeys>(database_name: T): Promise<PageObjectResponse[]> {
    /**
     * Check if the database exists in the registered databases
     */
    if (!Object.hasOwn(registeredNotionDatabases, database_name)) {
        throw error(500, `Database ${database_name} does not exist in registered databases`);
    }

    const databaseData = await notionClient.databases.query({
        database_id: registeredNotionDatabases[database_name],
    });

    const cleanedDatabaseData = databaseData.results.filter(isFullPage);

    fetchedDatabases[database_name] = cleanedDatabaseData;

    return cleanedDatabaseData;
}

/**
 *
 * @param page_id PageId of the Notion page you'd like to retrieve
 * @returns
 */
export const getPage = async (page_id: string) => await notionClient.pages.retrieve({ page_id });

type FetchedDatabaseBlocksResponses = Record<string, BlockObjectResponse[]>;

export const fetchedBlocks: FetchedDatabaseBlocksResponses = {};

/**
 *
 * @param block_id Block id of the Notion block you'd like to retrieve
 * @returns
 */
export const getBlocks = async (block_id: string) => {
    const { results } = await notionClient.blocks.children.list({
        block_id,
        page_size: 50,
    });

    const cleanedDatabaseData = results.filter(isFullBlock);

    fetchedBlocks[block_id] = cleanedDatabaseData;

    return cleanedDatabaseData;
};
