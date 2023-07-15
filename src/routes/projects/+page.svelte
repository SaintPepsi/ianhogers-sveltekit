<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SvelteSeo from "svelte-seo";
    /********** Icons **********/

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

    import Tile from "$lib/components/Tile.svelte";
    import Flex from "$lib/components/Flex.svelte";

    export let data;

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
                <h3>
                    Have a look at some of my recent projects below!
                </h3>
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
</Container>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 1fr">
            {#each data.results as result}
                <Grid columns="1fr 4fr" fullWidth>
                    <Tile type="primary" ratio={1}>tile</Tile>
                    <Flex direction="column" align="start">
                        <h4>title</h4>
                        <Bar {type} />
                        <Flex>tags?</Flex>
                    </Flex>
                </Grid>
            {/each}
        </Grid>
    </Spacer>
</Container>

<style>
    h4 {
        text-align: center;
    }
</style>
