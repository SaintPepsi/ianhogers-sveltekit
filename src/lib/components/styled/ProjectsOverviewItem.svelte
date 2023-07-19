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
    import Label from "$components/Label.svelte";
    import Tile from "$components/Tile.svelte";

    /**********************************************************************************************************
     *   UTILITIES
     **********************************************************************************************************/
    import { getFileBlockFile, getPlainTextFromRichText, getTitleBlockPlainText } from "$utils/notion/methods";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import type { ProjectsDatabasePropertiesData } from "$data/notion/databases";

    export let project: ProjectsDatabasePropertiesData;

    $: project_name = getTitleBlockPlainText(project.name);
    $: logo_colour = getPlainTextFromRichText(project.logo_colour);
</script>

<Tile type="primary" ratio={1}>
    <img
        style={`width: 100%; height: 100%; object-fit: contain; background-color: ${logo_colour}`}
        src={getFileBlockFile(project.logo)}
        alt={`${project_name} Logo`}
    />
</Tile>
<Flex direction="column" align="start">
    <h4>{project_name}</h4>
    <Flex wrap="wrap" justify="start">
        {#each project.tags.relation as tag}
            <Label type="tertiary" size="small">
                {getTitleBlockPlainText(tag.name)}
            </Label>
        {/each}
    </Flex>
    <Button type="secondary" href={`/projects/${getPlainTextFromRichText(project.nav_title)}/`}>
        View Project
        <SolarAltArrowRightBold />
    </Button>
</Flex>

<style lang="scss">
</style>
