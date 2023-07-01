<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import Img from "@zerodevx/svelte-img";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Container from "$components/Container.svelte";
    import Spacer from "$components/Spacer.svelte";
    /********** SHARED Styled **********/
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    /********** Images **********/
    import { IMAGE_profileShot } from "$lib/assets/images";
    import Flex from "$components/Flex.svelte";
    import Bar from "$components/Bar.svelte";
    import Chip from "$components/Chip.svelte";
    import Label from "$components/Label.svelte";
</script>

<Container size="medium">
    <Spacer>
        <HeadingTileContent>
            <Img
                style={"width: 100%; height: auto;"}
                slot="Tile"
                {...IMAGE_profileShot}
            />
            <Flex
                slot="Content"
                align="start"
                direction="column"
                gap={1}
            >
                <h2>Ian Hogers</h2>
                <Bar />
                <Label>Result Driven</Label>
            </Flex>
        </HeadingTileContent>
    </Spacer>
</Container>

<style lang="scss">
</style>
