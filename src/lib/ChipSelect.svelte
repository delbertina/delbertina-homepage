<script lang="ts">
  import type { KeyValuePair } from "src/types/card-data.js";
  import Button from "./Button.svelte";

  export let chips: KeyValuePair[];
  export let selectedChips: string[] = [];
  export let onChipClick: (key: string) => void;
</script>

<div class="chip-select-wrapper">
  {#each chips as chip}
    <Button
      title={chip.key}
      text={chip.key + " (" + chip.value + ")"}
      isSelected={selectedChips.indexOf(chip.key) !== -1}
      onClick={() => onChipClick(chip.key)}
    />
  {/each}
</div>

<style>
  .chip-select-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0;
  }
</style>
