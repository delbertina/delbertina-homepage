<script lang="ts">
  import Button from "./Button.svelte";

  export let itemText: string;
  export let itemLen: number;
  export let isSelected: boolean;
  export let onClick: () => void;
</script>

<Button
  title={"Toggle filter by " + itemText.toLowerCase() + " section"}
  text={"Filter " + itemText + (itemLen > 0 ? " (" + itemLen + ")" : "")}
  {isSelected}
  onClick={() => onClick()}
/>
