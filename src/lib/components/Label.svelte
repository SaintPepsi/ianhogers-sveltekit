<script lang="ts">
    import type { ThemeFontSize } from "$lib/utils";
    import {
        classes,
        createThemeClasses,
        type ThemeType,
    } from "$lib/utils";

    export let size: ThemeFontSize = "medium";
    export let type: ThemeType = "primary";

    $: sizeClass = `label-${size}`;
</script>

<label class={classes(sizeClass, createThemeClasses(type, false))}>
    <slot />
</label>

<style lang="scss">
    @import "$styles/theme.scss";

    label {
        display: inline-block;
        padding: $padding $padding * 2;
        border-radius: $padding;
        @extend .label-medium;
    }
</style>
