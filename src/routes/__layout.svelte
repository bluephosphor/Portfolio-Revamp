<script>
    import Nav from "./$lib/Nav.svelte"
</script>

<div class="container">
    <Nav />
    <slot />
</div>

<style>
    .container {
        font-family: sans-serif;
        max-width: 800px;
        margin: 50px auto

    }
</style>
