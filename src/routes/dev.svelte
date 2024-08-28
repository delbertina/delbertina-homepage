<script lang="ts">
  import ImgCard from "../lib/ImgCard.svelte";
  import LinkIconButton from "../lib/LinkIconButton.svelte";
  import LinkImgButton from "../lib/LinkImgButton.svelte";
  // @ts-ignore
  import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";
  import { DEV_DATA } from "../data/dev_data.js";
  import { ImgCardItem } from "../types/card-data.js";

  let headerSummaryExpanded = false;
  const headerSummaryText =
    "Seasoned software engineer with a knack for finding creative solutions to complex problems. I enjoy learning new languages/frameworks/libraries that help me create solutions to problems in my everyday life. I also enjoy utilizing technology to make provocative/funny/useful software for anyone to get value from.";
  const sortedDevData = DEV_DATA.sort((a, b) => a.projectDate < b.projectDate ? 1 : -1);

  function toggleHeaderSummaryExpand(): void {
    // TODO: Add some way to ease in and out of this state
    headerSummaryExpanded = !headerSummaryExpanded;
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
  <LinkIconButton link="https://github.com/delbertina" title="My Github account">
    <GoMarkGithub slot="icon" />
  </LinkIconButton>
</main>
<div class="content">
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
</style>
