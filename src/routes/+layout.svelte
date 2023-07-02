<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Nav from "$lib/components/Nav.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import "$lib/styles/global.scss";

    let theme: "light" | "dark" = "dark";
</script>

<svelte:head>
    <title>Ian Hogers - Software Engineer</title>
</svelte:head>

<div class="Layout on-background-text" data-theme={theme}>
    <Nav />
    <slot />
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Layout {
        min-height: 100vh;
        @extend .background;
    }
</style>
