// import { getDatabase } from "$lib/utils/notion";

import { getDatabase } from "$lib/utils/notion/api";

export const load = async () => {
    const data = await getDatabase("projects");

    return data;
};
