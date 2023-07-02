<script lang="ts">
    /**********************************************************************************************************
     *   UTILITIES
     **********************************************************************************************************/
    import { cssStringify } from "$lib/utils";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { PADDING } from "$lib/data/theme";

    export let columns = "";
    export let fullWidth = false;
    export let gap = 2;

    const style = cssStringify({
        "grid-template-columns": columns,
        gap: gap * PADDING,
    });
</script>

<div class="Grid" {style} class:fullWidth>
    <slot />
</div>

<style lang="scss">
    .Grid {
        display: grid;
        align-items: center;

        &.fullWidth {
            width: 100%;
        }
    }
</style>
