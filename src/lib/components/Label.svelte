<script lang="ts">
</script>

<label>
    <slot />
</label>

<style lang="scss">
    @import "$styles/theme.scss";

    label {
        padding: $padding $padding * 2;
        border-radius: $padding;
        @extend .label-medium;
        @extend .tertiary-container;
        @extend .on-tertiary-container-text;
    }
</style>
