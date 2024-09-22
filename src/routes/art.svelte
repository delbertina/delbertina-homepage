<script lang="ts">
  import { ART_DATA } from "../data/art_data.js";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
  import Header from "../lib/Header.svelte";

  const headerText = "Digital Artist";
</script>

<Header title={headerText} />
<div class="content">
  <div class="content-card-list">
    {#each ART_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
    {/each}
  </div>
</div>

<style>
  .content-card-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px 0;
  }
</style>