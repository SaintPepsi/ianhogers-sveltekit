<script>
    import favIcon from "/images/favicon.png";
</script>

<div class="nav-wrapper">
    <img src={favIcon} alt="Profile Shot" />
    <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/solutions">Solutions</a>
    </nav>
</div>

<style>
    .nav-wrapper {
        display: flex;
        align-items: center;
    }

    nav {
        width: 100%;
        padding: 0px 24px;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
