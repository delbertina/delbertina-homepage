<script lang="ts">
  import { VIDEO_DATA } from "../data/video_data.js";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
  import Header from "../lib/Header.svelte";
</script>

<Header title="Video Editing"/>
<div class="content">
  {#each VIDEO_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
