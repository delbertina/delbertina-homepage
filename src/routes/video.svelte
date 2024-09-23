<script lang="ts">
  import { VIDEO_DATA } from "../data/video_data.js";
  import Header from "../lib/Header.svelte";
  import ImgCardList from "../lib/ImgCardList.svelte";

  const headerText = "Video Editing";
</script>

<Header title={headerText} />
<div class="content">
  <ImgCardList cards={VIDEO_DATA} />
</div>
