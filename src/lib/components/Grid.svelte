<script lang="ts">
    import { PADDING } from "$lib/data/theme";
    import { cssStringify } from "$lib/utils";

    export let columns = "";
    export let gap = 2;

    const style = cssStringify({
        "grid-template-columns": columns,
        gap: gap * PADDING,
    });
</script>

<div class="Grid" {style}>
    <slot />
</div>

<style lang="scss">
    .Grid {
        display: grid;
    }
</style>
