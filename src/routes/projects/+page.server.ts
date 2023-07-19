import { getCollatedDatabase } from "$utils/notion/databaseCollator";

export const load = async () => {
    const projects = await getCollatedDatabase("projects");
    return {
        projects,
    };
};
