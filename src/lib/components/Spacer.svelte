<script lang="ts">
    import { PADDING } from "$lib/data/theme";
    import { cssStringify, px } from "$lib/utils";

    export let top = 8;
    export let bottom = 8;
    export let left = 0;
    export let right = 0;
    export let all = 0;

    $: allPadding = all * PADDING;

    const style = cssStringify({
        "margin-top": top * PADDING,
        "margin-bottom": bottom * PADDING,
        "padding-left": left * PADDING,
        "padding-right": right * PADDING,
    });
</script>

<div
    class="Spacer"
    {style}
    style:margin-top={px(all ? allPadding : top * PADDING)}
    style:margin-bottom={px(all ? allPadding : bottom * PADDING)}
    style:margin-left={px(all ? allPadding : left * PADDING)}
    style:margin-right={px(all ? allPadding : right * PADDING)}
>
    <slot />
</div>

<style>
    .Spacer {
        width: 100%;
    }
</style>
