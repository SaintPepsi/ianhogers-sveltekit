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
    import Img from "@zerodevx/svelte-img";
    import SvelteSeo from "svelte-seo";
    /********** Icons **********/
    import SolarAltArrowRightBold from "~icons/solar/alt-arrow-right-bold";
    import { isFullBlock, isFullPage } from "@notionhq/client";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Tile from "$lib/components/Tile.svelte";
    import Flex from "$lib/components/Flex.svelte";
    import Label from "$lib/components/Label.svelte";
    import Button from "$lib/components/Button.svelte";
    /********** SHARED Styled **********/
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";
    import ProjectsOverviewItem from "$components/styled/ProjectsOverviewItem.svelte";
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

<Container>
    <Spacer>
        <Grid columns="1fr 1fr">
            {#each data.projects as project}
                <Grid columns="1fr 4fr auto" fullWidth>
                    <ProjectsOverviewItem {project} />
                </Grid>
            {/each}
        </Grid>
    </Spacer>
</Container>
