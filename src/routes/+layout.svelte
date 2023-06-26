<script>
    import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
    <title>Ian Hogers - Software Engineer</title>
</svelte:head>

<Nav />
<slot />

<style>
    :global(*) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Commissioner", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    :global(body) {
        background-color: hsl(216, 5%, 18%);
        color: #fff;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        line-height: 2rem;
        font-family: "Source Code Pro", monospace;
        letter-spacing: 0.5px;
    }
</style>
