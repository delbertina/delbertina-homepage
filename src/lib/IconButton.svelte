<script lang="ts">
  export let title: string;
  export let text: string;
  export let onClick: () => void;
</script>

<button on:click={() => onClick()} {title}>
  <slot name="icon" />
  <div>
    {text}
  </div>
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
    align-items: center;
    gap: 8px;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
