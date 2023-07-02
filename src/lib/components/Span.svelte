<script lang="ts">
    import type { ThemeFontSize } from "$lib/utils";

    export let size: ThemeFontSize = "medium";
    export let textCenter = false;

    $: sizeClass = `label-${size}`;
</script>

<span class={sizeClass} class:textCenter>
    <slot />
</span>

<style lang="scss">
    span {
        &.textCenter {
            text-align: center;
        }
    }
</style>
