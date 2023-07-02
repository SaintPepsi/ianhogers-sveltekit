<script lang="ts">
    import { PADDING } from "$lib/data/theme";
    import { classes } from "$lib/utils";

    type Align = "start" | "center" | "end" | "stretch";
    type Justify =
        | "start"
        | "center"
        | "end"
        | "around"
        | "between"
        | "evenly";
    type Direction = "row" | "column";
    type Wrap = "no-wrap" | "wrap" | "wrap-reverse";

    export let direction: Direction = "row";
    export let align: Align = "center";
    export let justify: Justify = "center";
    export let wrap: Wrap = "no-wrap";
    export let reverse = false;
    export let gap = 1;

    //  'start' | 'center' | 'end' | 'stretch'
    const alignMap = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        stretch: "stretch",
    };

    //  'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'
    const justifyMap = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        around: "space-around",
        between: "space-between",
        evenly: "space-evenly",
    };

    $: directionWithReverse = reverse
        ? `${direction}-reverse`
        : direction;
</script>

<div
    {...$$restProps}
    class={classes("Flex", $$restProps.class)}
    style:display="flex"
    style:gap={gap ? `${gap * PADDING}px` : ""}
    style:flex-direction={directionWithReverse}
    style:flex-wrap={wrap === "no-wrap" ? "" : wrap}
    style:align-items={alignMap[align]}
    style:justify-content={justifyMap[justify]}
>
    <slot />
</div>

<style lang="scss">
    .Flex {
        position: relative;
    }
</style>
