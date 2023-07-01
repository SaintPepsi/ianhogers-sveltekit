<script lang="ts">
    export let href: string;
</script>

{#if href}
    <a {href} class="Button">
        <slot />
    </a>
{:else}
    <button type="button" class="Button">
        <slot />
    </button>
{/if}

<style lang="scss">
    @import "$styles/theme.scss";

    .Button {
        @extend .primary;
        @extend .on-primary-text;
        @extend .label-medium;

        display: flex;
        padding: $padding * 2;
        border-radius: $padding * 2;
        justify-content: center;
        align-items: center;
    }

    a {
        &.Button {
            text-decoration: none;
        }
    }
</style>
