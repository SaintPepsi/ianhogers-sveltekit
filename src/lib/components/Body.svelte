<script lang="ts">
</script>

<div class="Body">
    <slot />
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Body {
        :global(p) {
            margin-top: $padding * 2;
            margin-bottom: $padding;
        }
    }
</style>
