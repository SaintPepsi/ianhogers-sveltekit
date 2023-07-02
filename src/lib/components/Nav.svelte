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
    import ContactButton from "./styled/ContactButton.svelte";
    import Flex from "./Flex.svelte";

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
            <Flex justify="between">
                <Flex align="center" gap={3}>
                    {#each navItems as { route, title }}
                        <Anchor href={route}>{title}</Anchor>
                    {/each}
                </Flex>
                <ContactButton />
            </Flex>
        </nav>
    </Container>
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .nav-wrapper {
        position: relative;
        padding: $padding $padding * 2;
        min-height: $padding * 8;
    }

    .favicon {
        position: absolute;
    }
</style>
