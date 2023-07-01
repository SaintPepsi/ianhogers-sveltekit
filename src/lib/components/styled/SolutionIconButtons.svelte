<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Anchor from "$components/Anchor.svelte";
    import Grid from "$components/Grid.svelte";
    import Tile from "$components/Tile.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";

    const solutions = [
        routes.solutions.subRoutes.ecommerce,
        routes.solutions.subRoutes.websites,
        routes.solutions.subRoutes.apps,
        routes.solutions.subRoutes.games,
    ];
</script>

<Grid columns="1fr 1fr 1fr 1fr">
    {#each solutions as { route, Icon, title }}
        <Anchor href={route}>
            <Tile ratio={0.6} secondary column interactable>
                <Icon width={PADDING * 8} height={PADDING * 8} />
                <h4>{title}</h4>
            </Tile>
        </Anchor>
    {/each}
</Grid>
