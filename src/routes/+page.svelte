<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SolarCartLarge2BoldDuotone from "~icons/solar/cart-large-2-bold-duotone";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Tile from "$components/Tile.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import ProfilePhoto from "/images/profile.jpeg";
    import { PADDING } from "$lib/data/theme";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr">
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
            <Grid columns="1fr 6fr">
                <Tile ratio={0.6}>
                    <SolarCartLarge2BoldDuotone
                        width={PADDING * 8}
                        height={PADDING * 8}
                    />
                </Tile>
                test
            </Grid>
        </div>
    </Spacer>
</Container>

<style lang="scss">
    @import "$styles/theme.scss";

    .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > * {
            align-self: baseline;
        }
    }
</style>
