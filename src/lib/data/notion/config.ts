import { PROJECTS_DATABASE_ID } from "$env/static/private";

export interface NotionDatabaseKeys {
    projects: string;
}
export const notionDatabases: NotionDatabaseKeys = {
    projects: String(PROJECTS_DATABASE_ID),
};
