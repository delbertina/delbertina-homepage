<script lang="ts">
  export let link: string;
  export let title: string;

  function handleClick(url: string): void {
    window.open(url, "_blank")?.focus();
  }
</script>

<button on:click={() => handleClick(link)} title={title}>
  <slot name="icon" />
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 1em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    max-width: 100px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    display: flex;
    align-content: center;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
