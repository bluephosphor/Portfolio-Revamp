<script>
    import Nav from "./$lib/Nav.svelte";
    import Footer from "./$lib/Footer.svelte";
</script>

<div class="container">
    <Nav />
    <slot />
    <Footer />
</div>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Spectral&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap');

    .container {
        font-family: 'Hind Madurai', sans-serif;
        max-width: 800px;
        margin: 0px auto;
        min-height: 100vh;
        padding: 8px;
    }
</style>
