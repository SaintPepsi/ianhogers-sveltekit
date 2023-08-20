<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    /********** Icons **********/
    import SolarAltArrowRightBold from "~icons/solar/alt-arrow-right-bold";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Button from "$components/Button.svelte";
    import Flex from "$components/Flex.svelte";
    import Tile from "$components/Tile.svelte";
    import TileImage from "$components/TileImage.svelte";
    import TagsRenderer from "$components/notion/TagsRenderer.svelte";
    /**********************************************************************************************************
     *   UTILITIES
     **********************************************************************************************************/
    import { getFileBlockFile, getPlainTextFromRichText, getTitleBlockPlainText } from "$utils/notion/methods";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import type { ProjectsDatabasePropertiesData } from "$data/notion/databases";

    export let project: ProjectsDatabasePropertiesData;

    let project_name = getTitleBlockPlainText(project.name);
    let logo_colour = getPlainTextFromRichText(project.logo_colour.rich_text);
</script>

<Tile type="primary" ratio={1}>
    <TileImage backgroundColour={logo_colour} src={getFileBlockFile(project.logo)} alt={`${project_name} Logo`} />
</Tile>
<Flex direction="column" align="start">
    <h4>{project_name}</h4>
    <Flex wrap="wrap" justify="start">
        <TagsRenderer tags={project.tags} />
    </Flex>
    <Button type="secondary" href={`/projects/${getPlainTextFromRichText(project.nav_title.rich_text)}/`}>
        View Project
        <SolarAltArrowRightBold />
    </Button>
</Flex>

<style lang="scss">
</style>
