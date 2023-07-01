<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Grid from "$lib/components/Grid.svelte";
    import Spacer from "$lib/components/Spacer.svelte";
    import ProfilePhoto from "/images/profile.jpeg";
</script>

<Container size="medium">
    <Spacer>
        <Grid columns="1fr 3fr">
            <img
                width="100%"
                height="auto"
                src={ProfilePhoto}
                alt="Profile Shot"
            />
            <div class="info">
                <h2>Ian Hogers</h2>
                <h1>
                    Software Engineer
                    <div class="bar" />
                </h1>
                <h3>Building Solutions to your needs</h3>
            </div>
        </Grid>
    </Spacer>
</Container>

<style lang="scss">
    @import "$styles/theme.scss";
    .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > * {
            align-self: baseline;
        }
    }

    .bar {
        width: 100%;
        height: $padding;
        background-color: $color--green;
        border-radius: 4px;
        margin-top: $padding * 2;
    }
</style>
