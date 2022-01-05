<script>
  import { mainNav } from '/src/SiteData';
</script>

<nav>
    {#each mainNav as link}
      <a href={link.url}>{link.name}</a>
    {/each}
</nav>

<style lang="scss">
    nav {
        margin: 0px;
        padding: 0px 0px 8px 0px;
        display: flex;
        border-bottom: 1px solid gray;
    }
    a {
        text-decoration: none;
        margin-right: 10px;
        transition: 0.3s;
        &:hover{
            color: white;
        }
    }
</style>
