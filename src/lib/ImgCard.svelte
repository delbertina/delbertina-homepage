<script lang="ts">
  import type { ImgCardItem } from "../types/card-data.js";
  import TextChip from "./TextChip.svelte";

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
      <div class="card-tag-row">
        {#each cardItem.tags as tag}
          <TextChip name={tag} />
        {/each}
      </div>
      <p>
        {cardItem.description}
      </p>
      <div class="card-footer">{cardItem.footer}</div>
    </div>
  </div>
</a>

<style>
  .card {
    border: #28282e 2px solid;
    border-radius: 4px;
    padding: 1em;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .card-img {
    padding-right: 16px;
  }

  @media only screen and (max-width: 750px) {
    .card {
      flex-direction: column;
    }

    .card-img {
      padding-right: unset;
    }
  }

  .card-anchor {
    text-decoration: unset;
    color: unset;
  }

  .card-img-inner {
    width: 300px;
    height: auto;
    object-fit: contain;
    border: white 1px solid;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: stretch;
  }

  .card-content > h2 {
    margin-bottom: 0;
  }

  .card-content > h3 {
    margin-bottom: 8px;
  }

  .card-tag-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-content > p {
    margin-top: 8px;
    flex-grow: 1;
  }

  .card-footer {
    text-align: right;
    color: #ff3e00;
    text-transform: uppercase;
  }
</style>
