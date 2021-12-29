<script context="module">
    const allPosts = import.meta.glob('./*.{md,svx}');

    let body = [];
    for (let path in allPosts){
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return { path, metadata };
            })
        );
    }

    export const load = async () => {
        const posts = await Promise.all(body);
        return {
            props: {
                posts
            },
        };
    };
</script>

<script>
    export let posts;

    const dateSortedPosts = posts.slice().sort((a,b) => new Date(b.metadata.date) - new Date(a.metadata.date));
</script>

<h1>Blog</h1>

<ul>
    {#each dateSortedPosts as {path, metadata: { title, tags, date }}}
        <li>
            <a href={`/blog/${path.replace('.md','').replace('.svx','')}`}>{title}</a>
            <p class="date">{new Date(date).toDateString()}</p>
            <p>
                {#each tags as tag}
                    <a class="tag" href={`/tagged/${tag}`}>#{tag}</a>
                {/each}
            </p>
        </li>
    {/each}
</ul>

<style lang="scss">
    .tag{
        color: white;
        background-color: gray;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 3px;
        margin-right: 10px;
        font-size: 0.8em;
        &:hover{
            background-color: black
        }
    }
    
    .date{
        font-size: 0.8rem;
        color: gray
    }
    p{
        margin: 5px 0px;
    }
    li{
        margin-bottom: 20px
    }
</style>