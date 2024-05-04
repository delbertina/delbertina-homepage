<script lang="ts">
  export let name: string;
</script>

<div class="chip-wrapper">
  <div class="chip-inner">
    {name}
  </div>
</div>

<style>
  .chip-wrapper {
    border: 2px solid grey;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 8px;
  }

  .chip-wrapper:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .chip-inner {
    margin: 2px 8px;
  }
</style>
