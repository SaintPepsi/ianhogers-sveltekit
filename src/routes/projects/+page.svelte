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
    import Tile from "$lib/components/Tile.svelte";
    import NotionBlockFiles from "$lib/components/notion/NotionBlockFiles.svelte";
    import { MetaTypes } from "$lib/data/meta.js";

    export let data;

    console.log("data", data);

    const type = "primary";
    const solutionIcons = Object.values(routes.solutions.subRoutes);
    const iconSize = PADDING * 6;
</script>

<SvelteSeo
    title="Svelte Notion Kit"
    description="Brings your Notion pages to SvelteKit"
/>

<section class="" />

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

<Container size="medium">
    <Spacer>
        <Grid columns="repeat(4, 1fr)">
            {#each data.results as result}
                {#if isFullPage(result)}
                    <Tile type="primary" ratio={1}>
                        <NotionBlock
                            block={result.properties.logo}
                            meta={[
                                {
                                    type: MetaTypes.ALT,
                                    value: "Logo",
                                },
                            ]}
                        />
                    </Tile>
                    <NotionBlock block={result.properties.name} />
                {/if}
            {/each}
        </Grid>
    </Spacer>
</Container>
