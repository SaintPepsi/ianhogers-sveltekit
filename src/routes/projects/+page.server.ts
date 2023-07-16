import { getCollatedDatabase } from "$utils/notion/databaseCollator";

export const load = async () => {
    return await getCollatedDatabase("projects");
};
