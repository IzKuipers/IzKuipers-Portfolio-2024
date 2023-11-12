<script lang="ts">
  import { FeaturedProjects } from "../../ts/featured/store";
  import Project from "./Featured/Project.svelte";
</script>

<h2>Featured Projects</h2>
<div class="featured">
  {#each FeaturedProjects as project}
    <Project {project} />
  {/each}
</div>
