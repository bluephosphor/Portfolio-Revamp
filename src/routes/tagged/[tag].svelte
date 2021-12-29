<script context="module">
    const allPosts = import.meta.glob("../blog/*.{md,svx}");

    let body = [];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return { path, metadata };
            })
        );
    }

    export const load = async ({ page }) => {
        const posts = await Promise.all(body);
        const tag = page.params.tag;

        const filteredPosts = [...posts].filter(post => post.metadata.tags.includes(tag));

        return {
            props: {
                filteredPosts,
                tag,
            },
        };
    };
</script>

<script>
    import BlogListItem from '../$lib/BlogListItem.svelte'
    export let filteredPosts;
    export let tag;
</script>

<h3>Filter by tag: #{tag}</h3>

{#each filteredPosts as {path, metadata} (metadata.title)}
    <div class="blog-section">
        <BlogListItem {path} {metadata}/>
    </div>
{/each}

<style lang="scss">
    .blog-section {
        border-top: 1px solid gray;
        border-right: 1px solid gray;
        border-left: 1px solid gray;
    }
</style>
