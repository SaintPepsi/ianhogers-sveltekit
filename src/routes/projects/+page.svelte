<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import SvelteSeo from "svelte-seo";
    /********** Icons **********/

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import Spacer from "$components/Spacer.svelte";
    /********** SHARED Styled **********/
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";
    import ProjectsOverviewItem from "$components/styled/ProjectsOverviewItem.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import { PADDING } from "$lib/data/theme";
    import type { ProjectsDatabasePropertiesData } from "$data/notion/databases";
    export let data: { projects: ProjectsDatabasePropertiesData[] };

    const type = "primary";
    const solutionIcons = Object.values(routes.solutions.subRoutes);
    const iconSize = PADDING * 6;
</script>

<SvelteSeo title="Ian Hogers - Projects" description="Please view some of the projects i've worked on below!" />

<Container size="medium">
    <Spacer>
        <HeadingTileContent {type}>
            <Grid slot="Tile" columns="1fr 1fr">
                {#each solutionIcons as { Icon }}
                    <Icon font-size={iconSize} />
                {/each}
            </Grid>
            <svelte:fragment slot="Content">
                <h1>Projects</h1>
                <Bar {type} />
                <h4>Please view the projects i've worked on below!</h4>
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
</Container>

<Container>
    <Spacer>
        <Grid columns="1fr 1fr">
            {#each data.projects as project}
                <Grid columns="1fr 4fr auto" fullWidth>
                    <ProjectsOverviewItem {project} />
                </Grid>
            {/each}
        </Grid>
    </Spacer>
</Container>
