import { getBlocks } from "$lib/utils/notion";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }: { params: { id: string } }) {
    const { id } = params;
    const result = await getBlocks(id);
    return {
        result,
    };
}
