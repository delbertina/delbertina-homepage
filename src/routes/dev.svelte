<script lang="ts">
  import ImgCard from "../lib/ImgCard.svelte";
  import LinkIconButton from "../lib/LinkIconButton.svelte";
  import LinkImgButton from "../lib/LinkImgButton.svelte";
  // @ts-ignore
  import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";
  import { DEV_DATA } from "../data/dev_data.js";
  import {
    ImgCardItem,
    sortImgCardData,
    type ImgCardData,
  } from "../types/card-data.js";
  import IconButton from "../lib/IconButton.svelte";
  import Button from "../lib/Button.svelte";

  interface TotaledElm {
    title: string;
    value: number;
  }

  let headerSummaryExpanded = false;
  const headerSummaryText =
    "Seasoned software engineer with a knack for finding creative solutions to complex problems. I enjoy learning new languages/frameworks/libraries that help me create solutions to problems in my everyday life. I also enjoy utilizing technology to make provocative/funny/useful software for anyone to get value from.";
  let isSortDevDataDesc = true;
  let sortedDevData: ImgCardData[] = [];
  let sortedDevTagList: TotaledElm[] = [];
  let selectedTags: string[] = [];

  function toggleHeaderSummaryExpand(): void {
    // TODO: Add some way to ease in and out of this state
    headerSummaryExpanded = !headerSummaryExpanded;
  }

  function toggleDateSort(): void {
    isSortDevDataDesc = !isSortDevDataDesc;
    updateSortedData();
  }

  function updateSortedData(): void {
    sortedDevData = DEV_DATA.filter(
      (item) =>
        item.tags.filter(
          (tag) => selectedTags.length === 0 || selectedTags.indexOf(tag) !== -1
        ).length > 0
    ).sort((a, b) => sortImgCardData(a, b, isSortDevDataDesc));
    updateSortedTagList();
  }

  function toggleTag(tag: string): void {
    const tagInd = selectedTags.indexOf(tag);
    if (tagInd === -1) {
      selectedTags.push(tag);
    } else {
      selectedTags = selectedTags.filter((item) => item !== tag);
    }
    updateSortedData();
  }

  function updateSortedTagList(): void {
    const counts = new Map();
    sortedDevData
      .map((item) => item.tags)
      .flat()
      .forEach((item: string) =>
        counts.set(item, counts.get(item) ? counts.get(item) + 1 : 1)
      );
    const returnVal: TotaledElm[] = [];
    counts.forEach((value: number, key: string) =>
      returnVal.push({ title: key, value })
    );
    sortedDevTagList = returnVal
      .sort((a, b) => (a.value < b.value ? 1 : -1))
      .sort((a, b) => {
        const aInd = selectedTags.indexOf(a.title);
        const bInd = selectedTags.indexOf(b.title);
        return aInd !== -1 && bInd !== -1
          ? 0
          : aInd !== -1
            ? -1
            : bInd !== -1
              ? 1
              : 0;
      });
  }
  updateSortedData();
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
        <Button
          isDisabled={true}
          title="Displayed items count"
          text={sortedDevData.length + ""}
          onClick={() => {}}
        />
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
        {#each sortedDevTagList as item}
          <Button
            title={item.title}
            text={item.title + " (" + item.value + ")"}
            isSelected={selectedTags.indexOf(item.title) !== -1}
            onClick={() => toggleTag(item.title)}
          />
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
  .content-filters-row-divider {
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
    --mask: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 1) 32px,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 1) calc(100% - 32px),
      rgba(0, 0, 0, 0) 99%
    );
    -webkit-mask: var(--mask);
    mask: var(--mask);
    padding: 0 32px;
  }
</style>
