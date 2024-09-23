<script lang="ts">
  import LinkIconButton from "../lib/LinkIconButton.svelte";
  // @ts-ignore
  import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";
  import { DEV_DATA } from "../data/dev_data.js";
  import {
    sortImgCardData,
    type ImgCardData,
  } from "../types/card-data";
  import IconButton from "../lib/IconButton.svelte";
  import Button from "../lib/Button.svelte";
  import Header from "../lib/Header.svelte";
  import Subheader from "../lib/Subheader.svelte";
  import ImgCardList from "../lib/ImgCardList.svelte";

  interface TotaledElm {
    title: string;
    value: number;
  }

  const headerText = "Software Development";
  const subheaderText =
    "Seasoned software engineer with a knack for finding creative solutions to complex problems. I enjoy learning new languages/frameworks/libraries that help me create solutions to problems in my everyday life. I also enjoy utilizing technology to make provocative/funny/useful software for anyone to get value from.";

  let isFilterTagsExpanded = false;
  let isSortDevDataDesc = true;
  let sortedDevData: ImgCardData[] = [];
  let sortedDevTagList: TotaledElm[] = [];
  let selectedTags: string[] = [];

  function toggleDateSort(): void {
    isSortDevDataDesc = !isSortDevDataDesc;
    updateSortedData();
  }

  function toggleFilterTags(): void {
    isFilterTagsExpanded = !isFilterTagsExpanded;
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
      // sort by count
      .sort((a, b) => (a.value < b.value ? 1 : -1))
      // sort all selected tags to the top
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

<Header title={headerText} />
<Subheader text={subheaderText}>
  <LinkIconButton
    link="https://github.com/delbertina"
    title="My Github account"
    slot="icon"
  >
    <GoMarkGithub slot="icon" />
  </LinkIconButton>
</Subheader>
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
      <div class="content-filters-row-tag-menu">
        <Button
          title={"Toggle filter by tags section"}
          text={"Filter Tags"}
          onClick={() => toggleFilterTags()}
        />
      </div>
    </div>
    {#if isFilterTagsExpanded}
      <div class="content-filters-display-full">
        {#each sortedDevTagList as item}
          <Button
            title={item.title}
            text={item.title + " (" + item.value + ")"}
            isSelected={selectedTags.indexOf(item.title) !== -1}
            onClick={() => toggleTag(item.title)}
          />
        {/each}
      </div>
    {/if}
  </div>
  <ImgCardList cards={sortedDevData} />
</div>

<style>
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
    padding: 0 32px 4px 32px;
  }
  @media (max-width: 600px) {
    .content-filters-row-tags {
      display: none;
    }
    .content-filters-display-full {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
      margin: 16px 0;
    }
  }
  @media (min-width: 601px) {
    .content-filters-row-tag-menu {
      display: none;
    }
    .content-filters-display-full {
      display: none;
    }
  }
</style>
