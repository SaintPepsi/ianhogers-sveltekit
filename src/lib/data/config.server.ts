export const appConfig = {
    notion: {
        token: String(
            import.meta.env.NOTION_TOKEN ||
                process["env"]["NOTION_TOKEN"],
        ),
        projectsDatabaseID: String(
            import.meta.env.PROJECTS_DATABASE_ID ||
                process["env"]["PROJECTS_DATABASE_ID"],
        ),
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
