<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import type {
        Heading1BlockObjectResponse,
        Heading2BlockObjectResponse,
        Heading3BlockObjectResponse,
    } from "@notionhq/client/build/src/api-endpoints";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import NotionBlockRichText from "./NotionBlockRichText.svelte";

    export let block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse;
</script>

{#if block.type === "heading_1"}
    <h1 class="notion__block-type notion__heading notion__heading--h1">
        <NotionBlockRichText block={block.heading_1.rich_text} />
    </h1>
{:else if block.type === "heading_2"}
    <h2 class="notion__block-type notion__heading notion__heading--h2">
        <NotionBlockRichText block={block.heading_2.rich_text} />
    </h2>
{:else if block.type === "heading_3"}
    <h3 class="notion__block-type notion__heading notion__heading--h3">
        <NotionBlockRichText block={block.heading_3.rich_text} />
    </h3>
{/if}
