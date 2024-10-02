<script lang="ts">
  import LinkIconButton from "../lib/LinkIconButton.svelte";
  // @ts-ignore
  import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";
  import { DEV_DATA } from "../data/dev_data.js";
  import {
    sortImgCardData,
    type ImgCardData,
    type KeyValuePair,
  } from "../types/card-data.js";
  import IconButton from "../lib/IconButton.svelte";
  import Button from "../lib/Button.svelte";
  import Header from "../lib/Header.svelte";
  import Subheader from "../lib/Subheader.svelte";
  import ImgCardList from "../lib/ImgCardList.svelte";
  import ChipSelect from "../lib/ChipSelect.svelte";
  import FilterButton from "../lib/FilterButton.svelte";

  const headerText = "Software Development";
  const subheaderText =
    "Seasoned software engineer with a knack for finding creative solutions to complex problems. I enjoy learning new languages/frameworks/libraries that help me create solutions to problems in my everyday life. I also enjoy utilizing technology to make provocative/funny/useful software for anyone to get value from.";

  let isFilterTagsExpanded = false;
  let isFilterYearsExpanded = false;
  let isSortDevDataDesc = true;
  let sortedDevData: ImgCardData[] = [];
  let sortedDevTagList: KeyValuePair[] = [];
  let selectedTags: string[] = [];
  let sortedDevYearList: KeyValuePair[] = [];
  let selectedYears: string[] = [];

  function toggleDateSort(): void {
    isSortDevDataDesc = !isSortDevDataDesc;
    updateSortedData();
  }

  function toggleFilterTags(): void {
    isFilterTagsExpanded = !isFilterTagsExpanded;
    isFilterYearsExpanded = false;
  }

  function toggleFilterYears(): void {
    isFilterYearsExpanded = !isFilterYearsExpanded;
    isFilterTagsExpanded = false;
  }

  function updateSortedData(): void {
    sortedDevData = DEV_DATA.filter(
      (item) =>
        // if no filters are selected, don't filter out anything
        (selectedTags.length === 0 && selectedYears.length === 0) ||
        // else, if the item has one of the tags selected
        item.tags.filter((tag) => selectedTags.indexOf(tag) !== -1).length >
          0 ||
        // or the item has one of the years selected
        selectedYears.indexOf(item.cardDate.getFullYear() + "") !== -1
    ).sort((a, b) => sortImgCardData(a, b, isSortDevDataDesc));
    updateSortedTagList();
    updateSortedYearList();
  }

  function toggleTag(tag: string): void {
    const tagInd = selectedTags.indexOf(tag);
    if (tagInd === -1) {
      // trigger re-calc instead of using push
      selectedTags = [...selectedTags, tag];
    } else {
      selectedTags = selectedTags.filter((item) => item !== tag);
    }
    updateSortedData();
  }

  function toggleYear(year: string): void {
    const yearInd = selectedYears.indexOf(year);
    if (yearInd === -1) {
      // trigger re-calc instead of using push
      selectedYears = [...selectedYears, year];
    } else {
      selectedYears = selectedYears.filter((item) => item !== year);
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
    const returnVal: KeyValuePair[] = [];
    counts.forEach((value: number, key: string) =>
      returnVal.push({ key, value })
    );
    sortedDevTagList = returnVal
      // sort by count
      .sort((a, b) => (a.value < b.value ? 1 : -1))
      // sort all selected tags to the top
      .sort((a, b) => {
        const aInd = selectedTags.indexOf(a.key);
        const bInd = selectedTags.indexOf(b.key);
        return aInd !== -1 && bInd !== -1
          ? 0
          : aInd !== -1
            ? -1
            : bInd !== -1
              ? 1
              : 0;
      });
  }
  function updateSortedYearList(): void {
    const counts = new Map();
    sortedDevData
      .map((item) => item.cardDate.getFullYear())
      .forEach((item: number) =>
        counts.set(item, counts.get(item) ? counts.get(item) + 1 : 1)
      );
    const returnVal: KeyValuePair[] = [];
    counts.forEach((value: number, key: number) =>
      returnVal.push({ key: key + "", value })
    );
    sortedDevYearList = returnVal
      // sort by year asc
      .sort((a, b) => (a.key < b.key ? -1 : 1))
      // sort all selected tags to the top
      .sort((a, b) => {
        const aInd = selectedYears.indexOf(a.key);
        const bInd = selectedYears.indexOf(b.key);
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
      <FilterButton
        itemText="tags"
        itemLen={selectedTags.length}
        isSelected={isFilterTagsExpanded}
        onClick={() => toggleFilterTags()}
      />
      <FilterButton
        itemText="years"
        itemLen={selectedYears.length}
        isSelected={isFilterYearsExpanded}
        onClick={() => toggleFilterYears()}
      />
    </div>
    {#if isFilterTagsExpanded}
      <div class="content-filters-display-full">
        <ChipSelect
          chips={sortedDevTagList}
          selectedChips={selectedTags}
          onChipClick={(key) => toggleTag(key)}
        />
      </div>
    {/if}
    {#if isFilterYearsExpanded}
      <div class="content-filters-display-full">
        <ChipSelect
          chips={sortedDevYearList}
          selectedChips={selectedYears}
          onChipClick={(key) => toggleYear(key)}
        />
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
</style>
