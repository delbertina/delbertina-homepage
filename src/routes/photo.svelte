<script lang="ts">
  import { PHOTO_DATA } from "../data/photo_data.js";
  import ImgCard from "../lib/ImgCard.svelte";
  import { ImgCardItem } from "../types/card-data.js";
  import Header from "../lib/Header.svelte";
</script>

<Header title="Photography"/>
<div class="content">
  {#each PHOTO_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>
