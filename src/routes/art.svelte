<script lang="ts">
  import { ART_DATA } from "../data/art_data.js";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
  import Header from "../lib/Header.svelte";

  function handleClick(url: string): void {
    window.open(url, "_blank")?.focus();
  }
</script>

<Header title="Digital Artist"/>
<div class="content">
  {#each ART_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
