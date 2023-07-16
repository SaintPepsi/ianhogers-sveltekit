import {
    PROJECTS_DATABASE_ID,
    TAGS_DATABASE_ID,
} from "$env/static/private";
import type { MyNotionDatabaseKeys } from "$data/notion/databases";

export type NotionDatabaseEnvironmentKeys = {
    [key in MyNotionDatabaseKeys]: string;
};

export const registeredNotionDatabases: NotionDatabaseEnvironmentKeys =
    {
        projects: String(PROJECTS_DATABASE_ID),
        tags: String(TAGS_DATABASE_ID),
    };
