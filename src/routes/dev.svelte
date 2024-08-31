<script lang="ts">
  import ImgCard from "../lib/ImgCard.svelte";
  import LinkIconButton from "../lib/LinkIconButton.svelte";
  import LinkImgButton from "../lib/LinkImgButton.svelte";
  // @ts-ignore
  import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";
  import { DEV_DATA } from "../data/dev_data.js";
  import { ImgCardItem, sortImgCardData } from "../types/card-data.js";
  import IconButton from "../lib/IconButton.svelte";
  import Button from "../lib/Button.svelte";

  let headerSummaryExpanded = false;
  const headerSummaryText =
    "Seasoned software engineer with a knack for finding creative solutions to complex problems. I enjoy learning new languages/frameworks/libraries that help me create solutions to problems in my everyday life. I also enjoy utilizing technology to make provocative/funny/useful software for anyone to get value from.";
  let isSortDevDataDesc = true;
  let sortedDevData = DEV_DATA.sort((a, b) =>
    sortImgCardData(a, b, isSortDevDataDesc)
  );

  function toggleHeaderSummaryExpand(): void {
    // TODO: Add some way to ease in and out of this state
    headerSummaryExpanded = !headerSummaryExpanded;
  }

  function toggleDateSort(): void {
    isSortDevDataDesc = !isSortDevDataDesc;
    sortedDevData = DEV_DATA.sort((a, b) =>
      sortImgCardData(a, b, isSortDevDataDesc)
    );
  }

  function handleClick(url: string): void {
    window.open(url, "_blank")?.focus();
  }
</script>

<main>
  <LinkImgButton link="/" title="Back to home page" />
  <h1 class="unselectable">Software Development</h1>
  <h3 class="unselectable header-summary">
    {headerSummaryText.length > 250 && !headerSummaryExpanded
      ? headerSummaryText.slice(0, 249) + "..."
      : headerSummaryText}
  </h3>
  {#if headerSummaryText.length > 250}
    <button
      class="styled-small-button closer-header-expand-button"
      on:click={() => toggleHeaderSummaryExpand()}
    >
      {headerSummaryExpanded ? "Show Less" : "Show More"}
    </button>
  {/if}
  <LinkIconButton
    link="https://github.com/delbertina"
    title="My Github account"
  >
    <GoMarkGithub slot="icon" />
  </LinkIconButton>
</main>
<div class="content">
  <div class="content-filters">
    <div class="content-filters-row">
      <div class="content-filters-row-count">
        <Button isDisabled={true} title="Displayed items count" text={sortedDevData.length + ""} />
      </div>
      <div>
      <IconButton
        title="Toggle date sorting"
        text="Date"
        onClick={() => toggleDateSort()}
      >
        <div slot="icon">
          {#if isSortDevDataDesc}
            ▼
          {:else}
            ▲
          {/if}
        </div>
      </IconButton>
    </div>
      <div class="content-filters-row-divider" />
      <div class="content-filters-row-tags">
        {#each [...new Set(sortedDevData.map(item => item.tags).flat())] as item}
        <Button isDisabled={true} title={item} text={item} />
        {/each}
        </div>
    </div>
  </div>
  {#each sortedDevData as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>

<style>
  .closer-header-expand-button {
    margin-top: -16px;
  }
  .header-summary {
    width: 80%;
  }
  .content-filters-row {
    display: flex;
    flex-direction: row;
    gap: 8px;
    max-width: 100%;
    overflow: hidden;
  }
  .content-filters-row-divider{
    min-height: 100%;
    border: 1px solid grey;
    border-radius: 25%;
  }
  .content-filters-row-tags {
    display: flex;
    flex-direction: row;
    gap: 8px;
    overflow-x: scroll;
    scrollbar-width: thin;
  }
</style>
