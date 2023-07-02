<script lang="ts">
    import Footer from "$components/Footer.svelte";
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

<div class="Layout on-background-text body-medium" data-theme={theme}>
    <Nav />
    <slot />
    <Footer />
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Layout {
        min-height: 100vh;
        @extend .background;
    }
</style>
