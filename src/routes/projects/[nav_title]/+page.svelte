<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Container from "$lib/components/Container.svelte";
    import Spacer from "$lib/components/Spacer.svelte";
    import Bar from "$lib/components/Bar.svelte";
    import TileImage from "$components/TileImage.svelte";
    /********** SHARED Styled **********/
    import HeadingTileContent from "$lib/components/styled/HeadingTileContent.svelte";

    /**********************************************************************************************************
     *   UTILITIES
     **********************************************************************************************************/
    import { getFileBlockFile, getPlainTextFromRichText, getTitleBlockPlainText } from "$utils/notion/methods";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import type { ProjectsDatabasePropertiesData } from "$data/notion/databases";

    export let data: { project: ProjectsDatabasePropertiesData };

    let name = getTitleBlockPlainText(data.project.name);
    let full_name = getPlainTextFromRichText(data.project.full_name);
    let logo_colour = getPlainTextFromRichText(data.project.logo_colour);

    console.log("full_name", full_name);
    console.log("name", name);

    const type = "primary";
</script>

<Container size="medium">
    <Spacer>
        <HeadingTileContent>
            <TileImage backgroundColour={logo_colour} src={getFileBlockFile(data.project.logo)} alt={`${name} Logo`} />

            <svelte:fragment slot="Content">
                <h1>{full_name || name}</h1>
                <Bar {type} />
                <h3>Subtext</h3>
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
</Container>

<!-- <Container size="medium">RENDER THE BLOCKS HERE</Container> -->
