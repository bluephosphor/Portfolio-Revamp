<script>
  import { trimPath } from '/src/HelperFunctions'
  export let path;
  export let metadata;

  const { title } = metadata;
</script>

<section>
  <a href={`projects/${trimPath(path)}`}>
    <h3>{title}</h3>
  </a>
  <hr />

</section>

<style lang="scss">
  section{
    width: 372px;
    height: 150px;
    background: $bg-color;
    margin-bottom: 16px;
    border-radius: 5px;
    padding: 8px;
  }
  hr{
    height: 0px;
    border-top: 1px solid gray;
  }
</style>