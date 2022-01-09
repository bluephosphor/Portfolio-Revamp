<script>
    import { formatDate, trimPath } from '/src/HelperFunctions';
    export let path;
    export let metadata;

    const { title, date, tags } = metadata;
</script>

<section class="blog-item">
    <div class="title-row">
        <a href={`/blog/${trimPath(path)}`}>{title}</a>
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
        border: 1px solid black;
        border-bottom: 1px solid gray;
        padding: 8px;
        transition: 0.3s;
        &:hover{
            border-color: #aaa;
            //padding: 7px 7px 8px 7px
        }
    }
    .title-row {
        display: flex;
        justify-content: space-between;
        a {
            font-size: 1.3rem;
            text-decoration: none;
            transition: 0.3s;
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
        top:-8px;
        padding: 0px 2px;
    }
    p {
        margin: 5px 0px;
    }
    .tag {
        color: white;
        background-color: #444;
        border: 1px solid #444;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 3px;
        margin-right: 10px;
        font-size: 0.8em;
        transition: 0.1s;
        &:hover {
            background-color: black;
            border: 1px solid white;
        }
    }
</style>
