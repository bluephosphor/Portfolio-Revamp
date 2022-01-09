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
    width: 384px;
    height: 150px;
    background: #000D;
  }
</style>