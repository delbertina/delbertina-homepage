<script lang="ts">
  import type { ImgCardItem } from "../types/card-data.js";

  export let cardItem: ImgCardItem;
</script>

<a class="card-anchor" target="_blank" href={cardItem.cardLink}>
  <div class="card">
    <div class="card-img">
      {#if !cardItem.imgLink.match(`\.mp4`)}
        <!-- svelte-ignore a11y-media-has-caption -->
        <img
          class="card-img-inner"
          width="300px"
          src={cardItem.imgLink}
          alt={cardItem.imgAlt}
        />
      {:else}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video width="300px" src={cardItem.imgLink} autoplay loop />
      {/if}
    </div>
    <div class="card-content">
      <h2>{cardItem.title}</h2>
      <h3>{cardItem.subtitle}</h3>
      <p>
        {cardItem.description}
      </p>
      <div class="card-footer">{cardItem.footer}</div>
    </div>
  </div>
</a>
