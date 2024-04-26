<script lang="ts">
  import { PHOTO_DATA } from "../data/photo_data.js";
  import LinkIconButton from "../lib/LinkImgButton.svelte";
  import ImgCard from "../lib/ImgCard.svelte";
</script>

<main>
  <LinkIconButton link="/" />
  <h1>Photography</h1>
</main>
<div class="content">
  {#each PHOTO_DATA as item}
    <ImgCard cardItem={item} />
  {/each}
</div>
