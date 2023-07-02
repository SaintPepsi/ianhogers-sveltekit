<script lang="ts">
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

    const solutionIcons = Object.values(routes.solutions.subRoutes);
    const iconSize = PADDING * 6;
</script>

<Container size="medium">
    <Spacer>
        <HeadingTileContent>
            <Grid slot="Tile" columns="1fr 1fr">
                {#each solutionIcons as { Icon }}
                    <Icon font-size={iconSize} />
                {/each}
            </Grid>
            <svelte:fragment slot="Content">
                <h1>Solutions</h1>
                <Bar />
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
</Container>
