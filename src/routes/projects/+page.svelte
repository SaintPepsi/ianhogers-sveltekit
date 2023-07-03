<script lang="ts" context="module">
    import type { PostPreviewProps } from "$components/notion/PostPreview.svelte";

    type NotionItem = {
        id: string;
        properties: PostPreviewProps;
        created_time: string;
        last_edited_time: string;
    };

    import type { PageLoad } from "./$types";

    /**
     * @type {import('@sveltejs/kit').PageLoad}
     */
    export async function load({ fetch }): PageLoad {
        const res = await fetch("/index.json");
        if (res.ok) {
            return {
                props: {
                    result: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error(`Could not load database`),
        };
    }
</script>

<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SvelteSeo from "svelte-seo";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";

    import PostPreview from "$components/notion/PostPreview.svelte";

    export let result: {
        result: Array<NotionItem>;
    };

    const type = "primary";
    const solutionIcons = Object.values(routes.solutions.subRoutes);
    const iconSize = PADDING * 6;
</script>

<SvelteSeo
    title="Svelte Notion Kit"
    description="Brings your Notion pages to SvelteKit"
/>

<Container size="medium">
    <Spacer>
        <HeadingTileContent {type}>
            <Grid slot="Tile" columns="1fr 1fr">
                {#each solutionIcons as { Icon }}
                    <Icon font-size={iconSize} />
                {/each}
            </Grid>
            <svelte:fragment slot="Content">
                <h1>Projects</h1>
                <Bar {type} />
                <h4>
                    Have a look at some of my recent projects below!
                </h4>
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
</Container>
