<script lang="ts">
  import { ART_DATA } from "../data/art_data.js";
  import LinkIconButton from "../lib/LinkImgButton.svelte";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";

  function handleClick(url: string): void {
    window.open(url, "_blank")?.focus();
  }
</script>

<main>
  <LinkIconButton link="/" title="Back to home page" />
  <h1 class="unselectable">Digital Artist</h1>
</main>
<div class="content">
  {#each ART_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
