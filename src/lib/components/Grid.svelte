<script lang="ts">
    import { PADDING } from "$lib/data/theme";
    import { cssStringify } from "$lib/utils";

    export let columns = "";
    export let gap = 2;

    const style = {
        "grid-template-columns": columns,
        gap: `${gap * PADDING}px`,
    };
</script>

<div class="Grid" style={cssStringify(style)}>
    <slot />
</div>

<style lang="scss">
    .Grid {
        display: grid;
    }
</style>
