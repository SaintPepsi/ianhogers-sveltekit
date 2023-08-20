/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import { error, type ServerLoad } from "@sveltejs/kit";

/**********************************************************************************************************
 *   UTILITIES
 **********************************************************************************************************/
import { getCollatedDatabase } from "$utils/notion/databaseCollator";
import { getPlainTextFromRichText } from "$utils/notion/methods";

/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/

export const load: ServerLoad = async ({ params }) => {
    const projects = await getCollatedDatabase("projects");

    const project = projects.find((project) => {
        if (project.nav_title.type === "rich_text") {
            return getPlainTextFromRichText(project.nav_title.rich_text) === params.nav_title;
        }
        return false;
    });

    if (!project) {
        throw error(404, "Project not found");
    }
    return { project };
};
