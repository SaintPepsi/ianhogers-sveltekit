<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    /********** Icons **********/
    import SolarMapPointWaveBoldDuotone from "~icons/solar/map-point-wave-bold-duotone";
    import TeenyiconsReactSolid from "~icons/teenyicons/react-solid";
    import TablerBrandSvelte from "~icons/tabler/brand-svelte";
    import IcBaselineWordpress from "~icons/ic/baseline-wordpress";
    import IcBaselineShopify from "~icons/ic/baseline-shopify";
    import SolarCodeSquareBoldDuotone from "~icons/solar/code-square-bold-duotone";

    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Flex from "$components/Flex.svelte";
    import Label from "$components/Label.svelte";
    import Anchor from "$components/Anchor.svelte";
</script>

<Label>
    <Flex align="center">
        <SolarMapPointWaveBoldDuotone />
        <Anchor
            href="https://www.google.com/maps/place/Melbourne+VIC"
        >
            Melbourne
        </Anchor>
    </Flex>
</Label>
<Label>
    <Flex align="center">
        <SolarCodeSquareBoldDuotone />
        <Anchor href="https://nexigen.digital/">
            Nexigen Digital
        </Anchor>
    </Flex>
</Label>
<Label type="secondary">
    <Flex align="center">
        <TeenyiconsReactSolid />React
    </Flex>
</Label>
<Label type="secondary">
    <Flex align="center">
        <TablerBrandSvelte />
        Svelte
    </Flex>
</Label>
<Label type="secondary">
    <Flex align="center">
        <IcBaselineShopify />
        Shopify
    </Flex>
</Label>
<Label type="secondary">
    <Flex align="center">
        <IcBaselineWordpress />
        Wordpress
    </Flex>
</Label>
