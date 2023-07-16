<script lang="ts">
    import NotionBlockRichText from "$lib/components/notion/NotionBlockRichText.svelte";
    import type { TitleBlock } from "$utils/notion";

    export let block: TitleBlock;
    $: title = block.title;
</script>

<h3 class="notion__block-type notion__title">
    {#each title as blockItem}
        <NotionBlockRichText block={blockItem} />
    {/each}
</h3>
