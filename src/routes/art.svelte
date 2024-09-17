<script lang="ts">
  import { ART_DATA } from "../data/art_data.js";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
  import Header from "../lib/Header.svelte";

  const headerText = "Digital Artist";
</script>

<Header title={headerText} />
<div class="content">
  {#each ART_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
