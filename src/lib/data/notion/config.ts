import {
    PAGE_CONTENT_DATABASE_ID,
    PROJECTS_DATABASE_ID,
    SOLUTIONS_DATABASE_ID,
    TAGS_DATABASE_ID,
} from "$env/static/private";

type NotionDatabaseEnvironmentKeys = {
    [key: string]: string;
};

export const registeredNotionDatabases: NotionDatabaseEnvironmentKeys = {
    projects: String(PROJECTS_DATABASE_ID),
    tags: String(TAGS_DATABASE_ID),
    page_content: String(PAGE_CONTENT_DATABASE_ID),
    solutions: String(SOLUTIONS_DATABASE_ID),
};
