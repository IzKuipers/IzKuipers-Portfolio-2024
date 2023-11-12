<script>
  import { Connections } from "../../ts/connections/store";
</script>

<div class="connections">
  <p>Want to get in touch?</p>
  <div class="items">
    {#each Connections as connection}
      <a href={connection.url} title={connection.name}>
        <img src={connection.image} alt={connection.name} />
      </a>
    {/each}
  </div>
</div>
