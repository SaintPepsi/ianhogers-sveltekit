<button class="Chip" on:click>
    <label>
        <slot />
    </label>
</button>

<style lang="scss">
    @import "$styles/theme.scss";

    .Chip {
        padding: $padding $padding * 2;

        border-width: 1px;
        border-style: solid;
        border-radius: $padding;
        @extend .outline-border;
        @extend .label-medium;
        @extend .on-background-text;

        label {
            cursor: pointer;
        }
    }
</style>
