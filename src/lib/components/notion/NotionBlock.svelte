<script context="module" lang="ts">
    import type { SvelteComponent } from "svelte";
    import type { BlockTypes } from "$utils/notion";
    import NotionBlockTitle from "./NotionBlockTitle.svelte";

    type NotionBlockTypes = {
        [key in BlockTypes]?: typeof SvelteComponent;
    };
    export const notionBlockTypes: NotionBlockTypes = {
        title: NotionBlockTitle,
        files: NotionBlockFiles,
    };
</script>

<script lang="ts">
    // import NotionBlockHeading from "./NotionBlockHeading.svelte";
    // import NotionBlockRichText from "./NotionBlockRichText.svelte";
    // import NotionBlockTagList from "./NotionBlockTagList.svelte";
    // import NotionBlockPeople from "./NotionBlockPeople.svelte";
    // import NotionBlockParagraph from "./NotionBlockParagraph.svelte";
    // import NotionBlockNumberedList from "./NotionBlockNumberedList.svelte";
    // import NotionBlockBulletedList from "./NotionBlockBulletedList.svelte";
    // import NotionBlockToggleList from "./NotionBlockToggleList.svelte";

    import type { Block } from "$utils/notion";
    import NotionBlockFiles from "$lib/components/notion/NotionBlockFiles.svelte";
    import type { Meta } from "$lib/data/meta";

    export let block: Block;
    export let meta: Meta[] = [];

    let BlockComponent = notionBlockTypes[block.type];

    console.log("block", block);
</script>

<svelte:component this={BlockComponent} {block} />
