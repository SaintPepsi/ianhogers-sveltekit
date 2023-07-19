<script lang="ts">
    export let src: string;
    export let alt: string;
    export let backgroundColour: string = "transparent";
</script>

<img style={`background-color: ${backgroundColour}`} {src} {alt} />

<style lang="scss">
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
