<script>
  import { title } from '/src/SiteData'
</script>

<div class="center-card">
  <h1>{title.name}</h1>
  <div class="subtitles">
    {#each title.subtitles as sub}
      <span>{sub}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .center-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75vh;
    text-align: center;
    color: #ECF;
    text-shadow: 2px 2px 3px #505;
    font-size: 2em;
    .subtitles{
      display: flex;
      justify-content: space-between;
      width:100%;
    }
  }
  
  
</style>