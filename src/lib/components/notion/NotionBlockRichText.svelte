<script lang="ts">
    import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

    export let block: RichTextItemResponse | RichTextItemResponse[];
</script>

{#if Array.isArray(block)}
    {#each block as rich_text}
        <svelte:self block={rich_text} />
    {/each}
{:else}
    <span
        class:bold={block.annotations.bold}
        class:italic={block.annotations.italic}
        class:strikethrough={block.annotations.strikethrough}
        class:underline={block.annotations.underline}
        class:code={block.annotations.code}
        class="{block.annotations.color !== 'default'
            ? block.annotations.color
            : ''} notion__block-type notion__rich-text-item"
    >
        {#if block.type === "text"}
            {#if block.text.link}
                <a href={block.text.link.url} title={block.text.content}>{block.text.content}</a>
            {:else}
                {block.text.content}
            {/if}
        {/if}
    </span>
{/if}
