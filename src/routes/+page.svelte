<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Grid from "$lib/components/Grid.svelte";
    import ProfilePhoto from "/images/profile.jpeg";
</script>

<Container>
    <Grid columns="1fr 3fr">
        <img
            width="100%"
            height="auto"
            src={ProfilePhoto}
            alt="Profile Shot"
        />
        <div class="info">
            <h2>Ian Hogers</h2>
            <h1>Software Engineer</h1>
        </div>
    </Grid>
</Container>

<style lang="scss">
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
