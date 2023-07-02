<script lang="ts">
    import {
        createThemeClasses,
        type ThemeFontSize,
        type ThemeType,
    } from "$lib/utils";

    export let href: string;
    export let type: ThemeType = "background";
    export let size: ThemeFontSize = "medium";

    $: classes = [
        "Button",
        createThemeClasses(type, true),
        `label-${size}`,
    ].join(" ");
</script>

{#if href}
    <a {href} class={classes}>
        <slot />
    </a>
{:else}
    <button type="button" class={classes}>
        <slot />
    </button>
{/if}

<style lang="scss">
    @import "$styles/theme.scss";

    .Button {
        display: flex;
        padding: $padding $padding * 2;
        border-radius: $padding * 2;
        justify-content: center;
        align-items: center;
        gap: $padding;
    }

    a {
        &.Button {
            text-decoration: none;
        }
    }
</style>
