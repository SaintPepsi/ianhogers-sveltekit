<script lang="ts">
    export let href = "";
</script>

<a {href}><slot /></a>

<style lang="scss">
    @import "$styles/theme.scss";
    a {
        color: inherit;
        @extend .label-medium;
        text-decoration: none;
        :global(.Icon) {
            transition: all 0.2s ease-in-out;
        }

        &:hover,
        &:focus {
            text-decoration: underline;

            :global(.Icon) {
                transform: translate(0, -$padding);
            }
        }
    }
</style>
