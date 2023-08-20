<script lang="ts">
    import NotionBlockRichText from "$components/notion/NotionBlockRichText.svelte";
    import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

    export let block: QuoteBlockObjectResponse;
</script>

<blockquote>
    <NotionBlockRichText block={block.quote.rich_text} />
</blockquote>

<style lang="scss">
    @import "$styles/theme.scss";

    blockquote {
        border-left: $padding solid var(--md-sys-color-primary);
        margin: 1.5em 10px;
        padding: 0.5em 10px;
        quotes: "\201C""\201D""\2018""\2019";
    }
    blockquote:before {
        content: open-quote;
        font-size: 3em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
        color: var(--md-sys-color-secondary);
    }
    blockquote p {
        display: inline;
    }
</style>
