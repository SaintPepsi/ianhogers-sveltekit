<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    /********** Icons **********/
    import SolarAltArrowRightBold from "~icons/solar/alt-arrow-right-bold";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Anchor from "$components/Anchor.svelte";
    import Flex from "$components/Flex.svelte";
    import Grid from "$components/Grid.svelte";
    import Span from "$components/Span.svelte";
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

<div class="SolutionIconButtons">
    <Grid columns="1fr 1fr 1fr 1fr">
        {#each solutions as { route, Icon, title }}
            <Anchor href={route}>
                <Tile ratio={0.6} type="tertiary" interactable>
                    <Flex direction="column">
                        <Icon
                            width={PADDING * 8}
                            height={PADDING * 8}
                        />
                        <Flex align="center" gap={0.5}>
                            <Span size="large">
                                {title}
                            </Span>
                            <SolarAltArrowRightBold
                                class="IconOverride"
                            />
                        </Flex>
                    </Flex>
                </Tile>
            </Anchor>
        {/each}
    </Grid>
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .SolutionIconButtons {
        :global(.Flex) {
            :global(.IconOverride) {
                position: absolute;
                right: -$padding * 0.5;
                transform: translate(100%, 0);
            }
        }
    }
</style>
