<script lang="ts" context="module">
    import type { PostPreviewProps } from "$components/notion/PostPreview.svelte";

    type NotionItem = {
        id: string;
        properties: PostPreviewProps;
        created_time: string;
        last_edited_time: string;
    };
</script>

<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SvelteSeo from "svelte-seo";
    import { isFullBlock, isFullPage } from "@notionhq/client";

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

    import NotionBlock from "$lib/components/notion/NotionBlock.svelte";

    export let data;

    console.log("data", data);

    const type = "primary";
    const solutionIcons = Object.values(routes.solutions.subRoutes);
    const iconSize = PADDING * 6;

    for (const page of data.results) {
        if (!isFullPage(page)) {
            continue;
        }
        // The page variable has been narrowed from PageObjectResponse | PartialPageObjectResponse to PageObjectResponse.
        console.log("Created at:", page.created_time);

        page.properties;
    }
</script>

<SvelteSeo
    title="Svelte Notion Kit"
    description="Brings your Notion pages to SvelteKit"
/>

<!-- <section class="">
    {#each results as notionItem}
        {#if isFullPage(notionItem)}
            <NotionBlock block={notionItem.properties} />
        {/if}
    {/each}
</section> -->

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
