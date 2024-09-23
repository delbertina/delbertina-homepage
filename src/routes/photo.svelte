<script lang="ts">
  import { PHOTO_DATA } from "../data/photo_data.js";
  import Header from "../lib/Header.svelte";
  import ImgCardList from "../lib/ImgCardList.svelte";

  const headerText = "Photography";
</script>

<Header title={headerText} />
<div class="content">
  <ImgCardList cards={PHOTO_DATA} />
</div>
