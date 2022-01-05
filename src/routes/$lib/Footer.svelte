<script>
  import { backgroundImage } from "/src/SiteData";
</script>

<span>
  Background art: 
  {backgroundImage.name} 
  by: 
  <a href={backgroundImage.artistUrl}>
    {backgroundImage.artistName}
  </a>
</span>

<style lang="scss">
  span{
    font-size: 0.9em;
    text-align: center;
  }
</style>