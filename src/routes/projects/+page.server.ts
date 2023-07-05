// import { getDatabase } from "$lib/utils/notion";

import { appConfig } from "../../lib/data/config.server";

export const load = async () => {
    const result = await getDatabase();
    return {
        body: {
            result,
        },
    };
};
