<script lang="ts">
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Flex from "$components/Flex.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Tile from "$components/Tile.svelte";
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";

    const solutionIcons = Object.values(routes.solutions.subRoutes);
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr" gap={4}>
            <Tile secondary ratio={1}>
                <Grid columns="1fr 1fr">
                    {#each solutionIcons as { Icon }}
                        <Icon font-size={PADDING * 6} />
                    {/each}
                </Grid>
            </Tile>
            <Flex
                direction="column"
                align="start"
                style={"height: 100%;"}
            >
                <h1>Solutions</h1>
                <Bar />
            </Flex>
        </Grid>
    </Spacer>
</Container>

<style lang="scss">
</style>
