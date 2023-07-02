<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import Img from "@zerodevx/svelte-img";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Flex from "$components/Flex.svelte";
    import Label from "$components/Label.svelte";
    import Spacer from "$components/Spacer.svelte";
    /********** SHARED Styled **********/
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    /********** Images **********/
    import { IMAGE_profileShot } from "$lib/assets/images";
</script>

<Container size="medium">
    <Spacer>
        <HeadingTileContent>
            <Img
                style={"width: 100%; height: auto;"}
                slot="Tile"
                {...IMAGE_profileShot}
            />
            <Flex slot="Content" align="start" direction="column">
                <h2>Ian Hogers</h2>
                <Bar />
                <Label>Result Driven</Label>
            </Flex>
        </HeadingTileContent>
    </Spacer>
</Container>
