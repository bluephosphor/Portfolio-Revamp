<script context="module">
    const allPosts = import.meta.glob("./*.{md,svx}");

    let body = [];
    for (let path in allPosts) {
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
                posts,
            },
        };
    };
</script>

<script>
    import BlogListItem from '../$lib/BlogListItem.svelte'
    export let posts;
    const dateSortedPosts = posts
        .slice()
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
</script>

<h1>Blog</h1>
<main class="blog-section">
    {#each dateSortedPosts as { path, metadata }}
        <BlogListItem {path} {metadata}/>
    {/each}
</main>

<style lang="scss">
    .blog-section {
        border-top: 1px solid gray;
        border-right: 1px solid gray;
        border-left: 1px solid gray;
    }
</style>
