<script lang="ts">
    export let size: "default" | "medium" = "default";
</script>

<div class="Container" class:medium={size === "medium"}>
    <slot />
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Container {
        position: relative;
        width: 100%;
        padding: 0px 24px;
        margin: 0 auto;

        &:not(&.medium) {
            max-width: $padding * 200;
        }

        &.medium {
            max-width: $padding * 150;
        }
    }
</style>
