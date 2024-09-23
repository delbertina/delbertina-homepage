<script lang="ts">
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem, type ImgCardData } from "../types/card-data.js";
  export let cards: ImgCardData[];
</script>

<div class="img-card-list">
  {#each cards as card}
    <ImgCard cardItem={new ImgCardItem(card)} />
  {/each}
</div>

<style>
  .img-card-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px 0;
  }
</style>
