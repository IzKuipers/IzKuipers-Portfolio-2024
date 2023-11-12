<script lang="ts">
  export let project: Project;
</script>

<div class="project">
  <h3 class="title">
    <div class="image">
      <img src={project.image} alt="" />
    </div>
    {#if project.site}
      <a href={project.site}>{project.title}</a>
    {:else}
      <span>{project.title}</span>
    {/if}
  </h3>
  <p class="description">{project.description}</p>
</div>
