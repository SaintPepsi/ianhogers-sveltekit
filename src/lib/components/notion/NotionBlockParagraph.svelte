<script lang="ts">
    import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

    import NotionBlockRichText from "./NotionBlockRichText.svelte";

    export let block: ParagraphBlockObjectResponse;
</script>

<p class="notion__block-type notion__paragraph">
    {#if block.paragraph.rich_text.length}
        <NotionBlockRichText block={block.paragraph.rich_text} />
    {:else}
        <br />
    {/if}
</p>

<style lang="postcss">
    .notion__paragraph {
        @apply text-lg;
    }
</style>
