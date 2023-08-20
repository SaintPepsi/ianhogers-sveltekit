<script lang="ts">
    import { notionBlockTypes } from "$data/notion/components";
    // import NotionBlockHeading from "./NotionBlockHeading.svelte";
    // import NotionBlockRichText from "./NotionBlockRichText.svelte";
    // import NotionBlockTagList from "./NotionBlockTagList.svelte";
    // import NotionBlockPeople from "./NotionBlockPeople.svelte";
    // import NotionBlockNumberedList from "./NotionBlockNumberedList.svelte";
    // import NotionBlockBulletedList from "./NotionBlockBulletedList.svelte";
    // import NotionBlockToggleList from "./NotionBlockToggleList.svelte";

    import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

    export let block: BlockObjectResponse;

    let blockComponent = notionBlockTypes[block.type];
</script>

{#if blockComponent}
    <svelte:component this={blockComponent} {block} />
{:else}
    Can't render block type: {block.type} <br />
{/if}
