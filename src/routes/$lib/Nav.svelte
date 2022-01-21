<script>
  import { mainNav } from "/src/SiteData";
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
    background: $bg-color;
    justify-content: center;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 8px 84px;
    margin-right: 10px;
    transition: 0.3s;
    &:hover {
      color: white;
    }
  }
</style>
