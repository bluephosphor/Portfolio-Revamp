<script>
    import { formatDate } from '/src/HelperFunctions';
    export let title;
    export let tags;
    export let date;
</script>

<h1>{title}</h1>
<p class="date">Posted: {formatDate(date)}</p>
<hr />

<div class="container">
    <slot>
        <!-- the mdsvex content will be slotted in here -->
    </slot>
</div>

<p>
    {#each tags as tag}
        <a class="tag" href={`/tagged/${tag}`}>#{tag}</a>
    {/each}
</p>

<style lang="scss">
    .container :global(img) {
        display: block;
        width: 75%;
        margin: auto;
    }
    .container :global(hr){
      border: 0;
      height: 1px;
      background-color: gray;
    }
    .container{
      background-color: #000c;
      padding: 8px
    }
</style>
