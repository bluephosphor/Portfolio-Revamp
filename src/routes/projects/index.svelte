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
  import ProjectListItem from "../$lib/ProjectListItem.svelte";
  export let posts;
  const dateSortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
</script>

<section class="list-container">
  {#each dateSortedPosts as { path, metadata }}
    <ProjectListItem { metadata } { path } />
  {/each}
</section>

<style lang="scss">
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
