<script>
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Anchor from "./Anchor.svelte";
    import Container from "./Container.svelte";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import favIcon from "/images/favicon.png";
    import { routes } from "$lib/data/nav";

    const navItems = [
        routes.home,
        routes.solutions,
        routes.projects,
        routes.about,
    ];
</script>

<div class="nav-wrapper">
    <img
        src={favIcon}
        height="44"
        width="auto"
        alt="Profile Shot"
        class="favicon"
    />
    <Container size="medium">
        <nav class="on-background-text">
            {#each navItems as { route, title }}
                <Anchor href={route}>{title}</Anchor>
            {/each}
        </nav>
    </Container>
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .nav-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        padding: $padding $padding * 2;
        min-height: $padding * 8;
    }

    nav {
        :global(> *) {
            margin-right: $padding * 3;
        }
    }

    .favicon {
        position: absolute;
    }
</style>
