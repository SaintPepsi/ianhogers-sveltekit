<script>
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SolarBugMinimalisticBoldDuotone from "~icons/solar/bug-minimalistic-bold-duotone";
    import { page } from "$app/stores";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Container from "$components/Container.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Grid from "$components/Grid.svelte";
    import Tile from "$components/Tile.svelte";
    import Bar from "$components/Bar.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { PADDING } from "$lib/data/theme";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr" gap={6}>
            <Tile ratio={0.8} error>
                <SolarBugMinimalisticBoldDuotone
                    font-size={PADDING * 6}
                />
            </Tile>
            <div class="info">
                <h1>
                    {$page.status}: {$page?.error?.message}
                    <Bar />
                </h1>
                <h3>{$page.url.pathname}</h3>
            </div>
        </Grid>
    </Spacer>
</Container>
