<script lang="ts">
  import { VIDEO_DATA } from "../data/video_data.js";
  import LinkIconButton from "../lib/LinkImgButton.svelte";
  import ImgCard from "../lib/ImgCard.svelte";
</script>

<main>
  <LinkIconButton link="/" />
  <h1>Video Editing</h1>
</main>
<div class="content">
  {#each VIDEO_DATA as item}
    <ImgCard cardItem={item} />
  {/each}
</div>
