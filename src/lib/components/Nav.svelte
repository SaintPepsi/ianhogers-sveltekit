<script>
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Anchor from "$components/Anchor.svelte";
    import Container from "$components/Container.svelte";
    import Flex from "$components/Flex.svelte";
    /********** SHARED Styled **********/
    import ContactButton from "$components/styled/ContactButton.svelte";
    import { PADDING } from "$data/theme";
    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { routes } from "$lib/data/nav";
    import favIcon from "/images/favicon.png";

    const navItems = [routes.home, routes.solutions, routes.projects, routes.about];
</script>

<div class="nav-wrapper">
    <img src={favIcon} height={PADDING * 8} width="auto" alt="Profile Shot" class="favicon" />
    <Container size="medium">
        <nav class="on-background-text">
            <Flex justify="between">
                <Flex align="center" gap={3}>
                    <img src={favIcon} height={PADDING * 8} width="auto" alt="Profile Shot" class="favicon" />
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

    $containerQueryMaxWidth: $padding * 164;
    .nav-wrapper {
        position: relative;
        padding: $padding $padding * 2;
        min-height: $padding * 8;
        > .favicon {
            position: absolute;
        }

        :global(.Container),
        nav,
        nav > :global(.Flex) {
            min-height: $padding * 8;
        }

        @media screen and (max-width: $containerQueryMaxWidth) {
            > .favicon {
                display: none;
            }
            .on-background-text {
                .favicon {
                    display: block;
                }
            }
        }
    }

    .on-background-text {
        .favicon {
            display: none;
        }
    }
</style>
