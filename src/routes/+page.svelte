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

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import ProfilePhoto from "/images/profile.jpeg";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr">
            <img
                width="100%"
                height="auto"
                src={ProfilePhoto}
                alt="Profile Shot"
            />
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
                <SolarCartLarge2BoldDuotone width={40} height={40} />
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
