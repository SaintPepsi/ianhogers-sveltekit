<script lang="ts">
    export let href = "";
</script>

<a {href}><slot /></a>

<style lang="scss">
    @import "$styles/theme.scss";
    a {
        @extend .label-medium;
        text-decoration: none;

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }
</style>
