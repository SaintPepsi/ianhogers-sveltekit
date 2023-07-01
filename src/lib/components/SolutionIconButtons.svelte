<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SolarCartLarge2BoldDuotone from "~icons/solar/cart-large-2-bold-duotone";
    import SolarBoxMinimalisticBoldDuotone from "~icons/solar/box-minimalistic-bold-duotone";
    import SolarMonitorSmartphoneBoldDuotone from "~icons/solar/monitor-smartphone-bold-duotone";
    import SolarGamepadBoldDuotone from "~icons/solar/gamepad-bold-duotone";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Grid from "./Grid.svelte";
    import Tile from "./Tile.svelte";
    import Anchor from "./Anchor.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";

    const solutions = [
        {
            ...routes.solutions.subRoutes.ecommerce,
            Icon: SolarCartLarge2BoldDuotone,
        },
        {
            ...routes.solutions.subRoutes.websites,
            Icon: SolarMonitorSmartphoneBoldDuotone,
        },
        {
            ...routes.solutions.subRoutes.apps,
            Icon: SolarBoxMinimalisticBoldDuotone,
        },
        {
            ...routes.solutions.subRoutes.games,
            Icon: SolarGamepadBoldDuotone,
        },
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
