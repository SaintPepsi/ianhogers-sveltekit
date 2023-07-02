<script lang="ts">
    export let size: "small" | "medium" | "large" = "medium";

    $: sizeClass = `label-${size}`;
</script>

<span class={sizeClass}>
    <slot />
</span>

<style lang="scss">
</style>
