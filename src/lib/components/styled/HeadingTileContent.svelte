<script lang="ts">
    interface $$Slots {
        Tile: {};
        Content: {};
    }

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Flex from "$components/Flex.svelte";
    import Grid from "$components/Grid.svelte";
    import Tile from "$components/Tile.svelte";
</script>

<Grid columns="1fr 3fr" gap={4}>
    <Tile secondary ratio={1}>
        <slot name="Tile" />
    </Tile>
    <Flex direction="column" align="start" style={"height: 100%;"}>
        <slot name="Content" />
    </Flex>
</Grid>
