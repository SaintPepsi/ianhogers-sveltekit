import { projects } from "$lib/data/projects";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const project = projects.find(
        (project) => project.nav_title === params.nav_title,
    );

    if (!project) {
        throw error(404, "Project not found");
    }

    return project;
};
