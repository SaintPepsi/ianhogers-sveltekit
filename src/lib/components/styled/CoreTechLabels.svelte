<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Flex from "$components/Flex.svelte";
    import Label from "$components/Label.svelte";
    import Anchor from "$components/Anchor.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import SolarMapPointWaveBoldDuotone from "~icons/solar/map-point-wave-bold-duotone";
    import TeenyiconsReactSolid from "~icons/teenyicons/react-solid";
    import TablerBrandSvelte from "~icons/tabler/brand-svelte";
    import IcBaselineWordpress from "~icons/ic/baseline-wordpress";
    import IcBaselineShopify from "~icons/ic/baseline-shopify";
</script>

<Label>
    <Flex align="center">
        <SolarMapPointWaveBoldDuotone />
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
