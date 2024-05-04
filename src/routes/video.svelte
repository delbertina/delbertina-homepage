<script lang="ts">
  import { VIDEO_DATA } from "../data/video_data.js";
  import LinkIconButton from "../lib/LinkImgButton.svelte";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
</script>

<main>
  <LinkIconButton link="/" title="Back to home page" />
  <h1 class="unselectable">Video Editing</h1>
</main>
<div class="content">
  {#each VIDEO_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
