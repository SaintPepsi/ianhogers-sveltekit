<script lang="ts">
    import type { ThemeType } from "$lib/utils";

    export let type: ThemeType = "primary";
</script>

<div class={type} class:Bar={1} />

<style lang="scss">
    @import "$styles/theme.scss";
    .Bar {
        width: 100%;
        height: $padding;
        @extend .primary;
        border-radius: 4px;
        margin-top: $padding;
        margin-bottom: $padding * 0.5;
    }
</style>
