<script lang="ts">
  import Technology from "./Group/Technology.svelte";

  export let group: TechnologyGroup;
</script>

<div class="group group-{group.className}">
  <h4 class="title">{group.name}</h4>
  <div class="items">
    {#each group.technologies as tech}
      <Technology {tech} />
    {/each}
  </div>
</div>
