import { Client, isFullPage } from "@notionhq/client";
import { notionDatabases } from "$lib/data/notion/config";
import type {
    MyDatabases,
    ControlledQueryDatabaseResponse,
    MyNotionDatabaseKeys,
} from "$lib/data/notion/databases";
import { NOTION_TOKEN } from "$env/static/private";

/**
 * Initialize the Notion client
 */
export const notionClient = new Client({
    auth: NOTION_TOKEN,
});

/**
 * Notion's DB to pull
 * @param database_id
 * @returns
 */
export async function getDatabase<T extends MyNotionDatabaseKeys>(
    database_id: T,
): Promise<ControlledQueryDatabaseResponse<T>> {
    return await notionClient.databases.query({
        database_id: notionDatabases[database_id],
    });
}

/**
 *
 * @param page_id PageId of the Notion page you'd like to retrieve
 * @returns
 */
export const getPage = async (page_id: string) =>
    await notionClient.pages.retrieve({ page_id });

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
    return results;
};
