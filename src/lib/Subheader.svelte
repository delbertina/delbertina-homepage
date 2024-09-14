<script lang="ts">
  import LinkIconButton from "./LinkIconButton.svelte";
  import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";

  export let text: string;

  let isTextExpanded: boolean = false;

  function toggleTextExpand(): void {
    // TODO: Add some way to ease in and out of this state
    isTextExpanded = !isTextExpanded;
  }
</script>

<div class="subheader-wrapper">
  <div class="subheader-text">
    <h3 class="unselectable">
      {text.length > 250 && !isTextExpanded ? text.slice(0, 249) + "..." : text}
    </h3>
    {#if text.length > 250}
      <button
        class="styled-small-button subheader-toggle-expand-button"
        on:click={() => toggleTextExpand()}
      >
        {isTextExpanded ? "Show Less" : "Show More"}
      </button>
    {/if}
  </div>
  <LinkIconButton
    link="https://github.com/delbertina"
    title="My Github account"
  >
    <GoMarkGithub slot="icon" />
  </LinkIconButton>
</div>

<style>
  .subheader-toggle-expand-button {
    margin-top: -16px;
  }
  .subheader-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 5%;
    gap: 16px;
    & > button {
      align-self: center;
    }
  }

  .subheader-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
</style>
