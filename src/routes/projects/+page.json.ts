import { getDatabase } from "$lib/utils/notion";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
    const result = await getDatabase();
    return {
        body: {
            result,
        },
    };
}
