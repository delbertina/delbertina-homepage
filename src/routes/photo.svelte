<script lang="ts">
  import { PHOTO_DATA } from "../data/photo_data.js";
  import LinkIconButton from "../lib/LinkImgButton.svelte";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
</script>

<main>
  <LinkIconButton link="/" title="Back to home page" />
  <h1 class="unselectable">Photography</h1>
</main>
<div class="content">
  {#each PHOTO_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
