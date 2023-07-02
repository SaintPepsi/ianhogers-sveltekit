<script lang="ts">
    import type { ThemeFontSize } from "$lib/utils";

    export let size: ThemeFontSize = "medium";

    $: sizeClass = `label-${size}`;
</script>

<span class={sizeClass}>
    <slot />
</span>

<style lang="scss">
</style>
