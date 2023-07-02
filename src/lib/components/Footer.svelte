<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    /********** Icons **********/
    import TablerBrandSvelte from "~icons/tabler/brand-svelte";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Flex from "./Flex.svelte";
    import Anchor from "./Anchor.svelte";
</script>

<div class="Footer background on-background-text">
    <Flex>
        Build with
        <Anchor href="https://kit.svelte.dev/">
            <Flex>
                SvelteKit <TablerBrandSvelte />
            </Flex>
        </Anchor>
    </Flex>
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Footer {
        margin-top: $padding * 8;
        padding-bottom: $padding * 2;
    }
</style>
