<script lang="ts">
    import type { FilesBlock } from "$utils/notion";

    export let block: FilesBlock;
</script>

{#each block.files as file}
    {#if file.type === "file"}
        <img width="100%" height="100%" src={file.file.url} alt="" />
    {/if}
{/each}
