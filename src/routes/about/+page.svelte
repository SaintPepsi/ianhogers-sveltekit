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
</script>

<Container size="medium">
    <Spacer>
        <HeadingTileContent>
            <Img
                style={"width: 100%; height: auto;"}
                slot="Tile"
                {...IMAGE_profileShot}
            />
            <Flex slot="Content" align="stretch">
                <h2>Ian Hogers</h2>
            </Flex>
        </HeadingTileContent>
    </Spacer>
</Container>

<style lang="scss">
</style>
