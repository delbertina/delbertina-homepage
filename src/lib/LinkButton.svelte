<script lang="ts">
  import { Router, Link } from "svelte-routing";
  export let description: string;
  export let link: string;
  export let title: string;
</script>

<Router>
  <Link to="{link}" tabindex={-1}>
    <button title={title}>
      {description}
    </button>
  </Link>
</Router>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
