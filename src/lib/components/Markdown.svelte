<script lang="ts">
    import MarkdownIt from "markdown-it";

    export let markdown = "";
    const md = new MarkdownIt();
</script>

<div class="Markdown">
    {@html md.render(markdown)}
</div>
