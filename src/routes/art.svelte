<script lang="ts">
  import { ART_DATA } from "../data/art_data.js";
  import Header from "../lib/Header.svelte";
  import ImgCardList from "../lib/ImgCardList.svelte";

  const headerText = "Digital Artist";
</script>

<Header title={headerText} />
<div class="content">
  <ImgCardList cards={ART_DATA} />
</div>
