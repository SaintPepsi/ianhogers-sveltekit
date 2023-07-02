<script lang="ts">
    import { PADDING } from "$lib/data/theme";
    import { px } from "$lib/utils";

    export let top = 8;
    export let bottom = 8;
    export let left = 0;
    export let right = 0;
    export let all = 0;
    export let padding = false;

    $: allMargin = all * PADDING;
</script>

<div
    class="Spacer"
    style:margin-top={padding
        ? ""
        : px(all ? allMargin : top * PADDING)}
    style:margin-bottom={padding
        ? ""
        : px(all ? allMargin : bottom * PADDING)}
    style:margin-left={padding
        ? ""
        : px(all ? allMargin : left * PADDING)}
    style:margin-right={padding
        ? ""
        : px(all ? allMargin : right * PADDING)}
    style:padding-top={padding
        ? px(all ? allMargin : top * PADDING)
        : ""}
    style:padding-bottom={padding
        ? px(all ? allMargin : bottom * PADDING)
        : ""}
    style:padding-left={padding
        ? px(all ? allMargin : left * PADDING)
        : ""}
    style:padding-right={padding
        ? px(all ? allMargin : right * PADDING)
        : ""}
>
    <slot />
</div>

<style>
    .Spacer {
        width: 100%;
    }
</style>
