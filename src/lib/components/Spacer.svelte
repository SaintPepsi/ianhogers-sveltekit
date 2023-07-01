<script lang="ts">
    import { PADDING } from "$lib/data/theme";
    import { cssStringify } from "$lib/utils";

    export let top = 8;
    export let bottom = 8;
    export let left = 0;
    export let right = 0;

    const style = cssStringify({
        "margin-top": top * PADDING,
        "margin-bottom": bottom * PADDING,
        "padding-left": left * PADDING,
        "padding-right": right * PADDING,
    });
</script>

<div class="Spacer" {style}>
    <slot />
</div>
