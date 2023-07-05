import {
    PROJECTS_DATABASE_ID,
    NOTION_TOKEN,
} from "$env/static/private";
export const appConfig = {
    notion: {
        token: String(NOTION_TOKEN),
        projectsDatabaseID: String(PROJECTS_DATABASE_ID),
    },
    // baseUrl: String(import.meta.env.VITE_APP_URL || process['env']['APP_URL'] || ''),
    properties: {
        title: "title",
        summary: "summary",
        tags: "tags",
        published: "published",
        author: "author",
    },
};
