<script>
    import { formatDate } from '/src/HelperFunctions';
    import { createEventDispatcher } from 'svelte';
    export let path;
    export let metadata;

    const dispatch = createEventDispatcher();

    const forward = (event) => {
        dispatch('update');
    }
    const { title, date, tags } = metadata;
</script>

<section class="blog-item">
    <div class="title-row">
        <a href={`/blog/${path.replace(".md", "").replace(".svx", "")}`}
            >{title}</a
        >
        <span class="date">{formatDate(date)}</span>
    </div>

    <p>
        {#each tags as tag}
            <a class="tag" href={`/tagged/${tag}`}>#{tag}</a>
        {/each}
    </p>
</section>

<style lang="scss">
    .blog-item {
        border-bottom: 1px solid gray;
        padding: 8px;
        &:hover{
            border: 1px solid #aaa;
            padding: 7px 7px 8px 7px
        }
    }
    .title-row {
        display: flex;
        justify-content: space-between;
        a {
            font-size: 1.3rem;
            text-decoration: none;
            &:hover {
                color: white;
            }
        }
    }
    .date {
        font-size: 0.8rem;
        color: gray;
        text-align: right;
        position: relative;
        top:-14px;
        background-color: black;
        padding: 0px 2px;
    }
    p {
        margin: 5px 0px;
    }
    .tag {
        color: white;
        background-color: #444;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 3px;
        margin-right: 10px;
        font-size: 0.8em;
        &:hover {
            padding:3px 7px;
            background-color: black;
            border: 1px solid white;
        }
    }
</style>
