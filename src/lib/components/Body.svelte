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

        :global(h1) {
            margin-top: $padding * 6;
            margin-bottom: $padding * 3;
        }

        :global(h2) {
            margin-top: $padding * 5;
            margin-bottom: $padding * 2;
        }

        :global(h3) {
            margin-top: $padding * 4;
            margin-bottom: $padding * 1;
        }
    }
</style>
