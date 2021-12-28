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
</script>

<h1>Blog</h1>

<ul>
    {#each posts as {path, metadata: { title, tags }}}
        <li>
            <a href={`/blog/${path.replace('.md','').replace('.svx','')}`}>{title}</a>
            <p>
                {#each tags as tag}
                    <a class="tag" href={`/tags/${tag}`}>#{tag}</a>
                {/each}
            </p>
        </li>
    {/each}
</ul>

<style>
    .tag{
        color: white;
        background-color: gray;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 3px;
        margin-right: 10px;
        font-size: 0.8em
    }
    .tag:hover{
        background-color: black
    }
    p{
        margin: 5px 0px;
    }
    li{
        margin-bottom: 20px
    }
</style>