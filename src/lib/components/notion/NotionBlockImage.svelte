<script lang="ts">
    import { getPlainTextFromRichText } from "$utils/notion/methods";
    import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

    export let block: ImageBlockObjectResponse;
    console.log("block", block);
</script>

image!

{#if block.image.type === "file"}
    <img width="100%" height="100%" src={block.image.file.url} alt={getPlainTextFromRichText(block.image.caption)} />
{/if}
