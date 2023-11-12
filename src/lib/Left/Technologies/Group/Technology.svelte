<script lang="ts">
  export let tech: Technology;
</script>

<a href={tech.site} class="tech" title={tech.name}>
  <img src={tech.image} alt="" />
</a>
