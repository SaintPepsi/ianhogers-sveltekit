<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Flex from "$components/Flex.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Tile from "$components/Tile.svelte";

    /********** SHARED Styled **********/
    import SolutionIconButtons from "$components/styled/SolutionIconButtons.svelte";
    import CoreTechLabels from "$components/styled/CoreTechLabels.svelte";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr" gap={2}>
            <Tile type="primary" ratio={1}>Something nice here</Tile>
            <Flex direction="column" align="start" justify="center" style={"height: 100%;"}>
                <h2>Ian Hogers</h2>
                <h1>
                    Software Engineer
                    <Bar />
                </h1>
                <h3>Custom software solutions</h3>
            </Flex>
        </Grid>
        <Spacer top={2}>
            <Grid columns="1fr 1fr">
                <Flex justify="start" align="center" wrap="wrap">
                    <CoreTechLabels />
                </Flex>
            </Grid>
        </Spacer>
    </Spacer>

    <Spacer>
        <div class="solutions">
            <h3>Solutions:</h3>
            <SolutionIconButtons />
        </div>
    </Spacer>
</Container>

<style lang="scss">
    @import "$styles/theme.scss";

    .solutions {
        h3 {
            margin-bottom: $padding * 2;
        }
    }
</style>
