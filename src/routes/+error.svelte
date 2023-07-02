<script>
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import { page } from "$app/stores";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Container from "$components/Container.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Grid from "$components/Grid.svelte";
    import Tile from "$components/Tile.svelte";
    import Bar from "$components/Bar.svelte";
    import Flex from "$components/Flex.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/

    import SolarBugMinimalisticBoldDuotone from "~icons/solar/bug-minimalistic-bold-duotone";
    import { PADDING } from "$lib/data/theme";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr" gap={6}>
            <Tile ratio={0.6} type="error">
                <SolarBugMinimalisticBoldDuotone
                    font-size={PADDING * 6}
                />
            </Tile>
            <Flex direction="column" align="stretch">
                <h1>
                    {$page.status}: {$page?.error?.message}
                </h1>
                <Bar type="error" />
                <h3>{$page.url.pathname}</h3>
            </Flex>
        </Grid>
    </Spacer>
</Container>
