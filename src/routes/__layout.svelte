<script>
    import Nav from "./$lib/Nav.svelte"
</script>

<div class="container">
    <Nav />
    <slot />
</div>

<style lang="scss">
    .container {
        background-color: black;
        font-family: sans-serif;
        max-width: 800px;
        margin: 0px auto;
        min-height: 100vh;
        padding: 8px;
        
    }
</style>
