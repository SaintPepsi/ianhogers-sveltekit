<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Flex from "./Flex.svelte";
</script>

<div class="Footer background on-background-text">
    <Flex>Footer :)</Flex>
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Footer {
        margin-top: $padding * 8;
        padding-bottom: $padding * 2;
    }
</style>
