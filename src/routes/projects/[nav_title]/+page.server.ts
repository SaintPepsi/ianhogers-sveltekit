/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import { error, type ServerLoad } from "@sveltejs/kit";

/**********************************************************************************************************
 *   UTILITIES
 **********************************************************************************************************/
import { getCollatedDatabase } from "$utils/notion/databaseCollator";
import { getPlainTextFromRichText } from "$utils/notion/methods";
import type { RichTextBlock } from "$utils/notion";

/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/

export const load: ServerLoad = async ({ params }) => {
    const projects = await getCollatedDatabase("projects");

    const project = projects.find(
        (project) => getPlainTextFromRichText(project.nav_title as RichTextBlock) === params.nav_title,
    );

    if (!project) {
        throw error(404, "Project not found");
    }
    return { project };
};
