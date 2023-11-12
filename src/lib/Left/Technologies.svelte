<script>
  import { Technologies } from "../../ts/technologies/store";
  import Group from "./Technologies/Group.svelte";
</script>

<h2>What I use...</h2>
<div class="technologies">
  {#each Technologies as group}
    <Group {group} />
  {/each}
</div>
