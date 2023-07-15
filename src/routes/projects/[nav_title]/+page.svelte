<script lang="ts">
    import Bar from "$lib/components/Bar.svelte";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Container from "$lib/components/Container.svelte";
    import Markdown from "$lib/components/Markdown.svelte";
    import Spacer from "$lib/components/Spacer.svelte";

    /********** SHARED Styled **********/
    import HeadingTileContent from "$lib/components/styled/HeadingTileContent.svelte";
    import Img from "@zerodevx/svelte-img";

    export let data;
    console.log("data", data);
    const type = "primary";
</script>

That's a subpage!
<Container size="medium">
    <Spacer>
        <HeadingTileContent>
            <Img
                style={"width: 100%; height: auto; object-fit: cover;"}
                slot="Tile"
                {...data.logo}
            />
            <svelte:fragment slot="Content">
                <h1>{data.full_name ?? data.name}</h1>
                <Bar {type} />
                <h3>Subtext</h3>
            </svelte:fragment>
        </HeadingTileContent>
    </Spacer>
</Container>

<Container size="medium">
    <Markdown markdown={data.page_content} />
</Container>
