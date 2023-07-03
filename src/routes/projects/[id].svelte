<script lang="ts" context="module">
    import type { Block } from "$lib/utils/notion";

    export async function load({
        page: { params },
    }: {
        page: { params: { id: string } };
    }) {
        const { id } = params;
        const res = await fetch(`/projects/${id}.json`);
        if (res.ok) {
            return {
                props: {
                    result: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error(`Could not pull the block`),
        };
    }
</script>

<script lang="ts">
    import SvelteSeo from "svelte-seo";

    export let result: {
        result: Array<Block>;
    };
</script>

<SvelteSeo
    title="Some Project Data"
    description="Svelte with brilliant bells and useful whistles"
/>

<style lang="scss">
</style>
