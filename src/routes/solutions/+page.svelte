<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    /********** Icons **********/
    import SolarAltArrowRightBold from "~icons/solar/alt-arrow-right-bold";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Flex from "$components/Flex.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Tile from "$components/Tile.svelte";
    import Anchor from "$components/Anchor.svelte";
    /********** SHARED Styled **********/
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";
    import { SOLUTIONS_LIST } from "$lib/data/solutions";

    const type = "tertiary";
    const solutionIcons = Object.values(routes.solutions.subRoutes);
    const iconSize = PADDING * 6;
</script>

<Container size="medium">
    <Spacer>
        <HeadingTileContent {type}>
            <Grid slot="Tile" columns="1fr 1fr">
                {#each solutionIcons as { Icon }}
                    <Icon font-size={iconSize} />
                {/each}
            </Grid>
            <svelte:fragment slot="Content">
                <h1>Solutions</h1>
                <Bar {type} />
                <h4>Some of the services I offer.</h4>
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
    <Spacer>
        <div class="solutionsGrid">
            <Grid columns="1fr 1fr" gap={4}>
                {#each SOLUTIONS_LIST as { Icon, title, body, route }}
                    <!-- content here -->
                    <Tile type="secondary">
                        <div class="content">
                            <Flex
                                direction="column"
                                align="stretch"
                                justify="start"
                            >
                                <Flex
                                    direction="column"
                                    align="start"
                                >
                                    <Icon font-size={PADDING * 8} />
                                    <h3>{title}</h3>
                                    <p>
                                        {body}
                                    </p>
                                </Flex>
                                <br />
                                <Flex justify="end">
                                    <Anchor href={route}>
                                        <Flex>
                                            View {title} projects
                                            <SolarAltArrowRightBold />
                                        </Flex>
                                    </Anchor>
                                </Flex>
                            </Flex>
                        </div>
                    </Tile>
                {/each}
            </Grid>
        </div>
    </Spacer>
</Container>

<style lang="scss">
    @import "$styles/theme.scss";
    .content {
        padding: $padding * 3;
        height: 100%;

        > :global(.Flex) {
            height: 100%;
            :global(.Flex:first-child) {
                flex-grow: 1;

                :global(p) {
                    flex-grow: 1;
                }
            }
        }
    }

    .solutionsGrid {
        :global(.Grid) {
            :global(.Tile) {
                align-self: stretch;
            }
        }
    }
</style>
