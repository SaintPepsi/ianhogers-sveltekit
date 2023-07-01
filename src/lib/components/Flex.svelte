<script lang="ts">
    type Align = "start" | "center" | "end" | "stretch";
    type Justify =
        | "start"
        | "center"
        | "end"
        | "around"
        | "between"
        | "evenly";
    type Direction = "row" | "column";

    export let direction: Direction = "row";
    export let align: Align = "center";
    export let justify: Justify = "center";
    export let reverse = false;

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
    class={$$restProps.class}
    style:display="flex"
    style:flex-direction={directionWithReverse}
    style:align-items={alignMap[align]}
    style:justify-content={justifyMap[justify]}
>
    <slot />
</div>
