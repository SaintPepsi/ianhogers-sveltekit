<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import SolutionIconButtons from "$components/SolutionIconButtons.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Tile from "$components/Tile.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import ProfilePhoto from "/images/profile.jpeg";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="2fr 4fr" gap={4}>
            <Tile>
                <img
                    width="100%"
                    height="auto"
                    src={ProfilePhoto}
                    alt="Profile Shot"
                />
            </Tile>
            <div class="info">
                <h2>Ian Hogers</h2>
                <h1>
                    Software Engineer
                    <Bar />
                </h1>
                <h3>Building Solutions to your needs</h3>
            </div>
        </Grid>
    </Spacer>
    <Spacer>
        <div class="solutions">
            <h3>Solutions:</h3>
            <SolutionIconButtons />
        </div>
    </Spacer>

    <Spacer>
        <div class="projects">
            <h3>Projects:</h3>
        </div>
    </Spacer>
</Container>

<style lang="scss">
    @import "$styles/theme.scss";

    .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > * {
            align-self: baseline;
        }
    }

    .solutions {
        h3 {
            margin-bottom: $padding * 2;
        }
    }
</style>
