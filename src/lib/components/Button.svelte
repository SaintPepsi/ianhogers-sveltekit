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
    <a {href} class={classes} {...$$restProps}>
        <slot />
    </a>
{:else}
    <button type="button" class={classes} {...$$restProps}>
        <slot />
    </button>
{/if}

<style lang="scss">
    @import "$styles/theme.scss";

    .Button {
        display: inline-flex;
        padding: $padding $padding * 2;
        border-radius: $padding * 2;
        justify-content: start;
        align-items: center;
        gap: $padding;
    }

    a {
        &.Button {
            text-decoration: none;
        }
    }
</style>
