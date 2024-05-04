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
    "I've been into computers since I was 5. My first computer ran Windows 95 and I got substantial experience troubleshooting problems on that computer before the internet. I've been techy from a young age both learning how to fix physical electronics and having fun with inspect element on websites. My first real program was written in my HS digital electronics class. That class was manufacturing and automation focused so we wrote programs in BASIC for simple robots, C programs for VEX robots, and G-Code for CNC machines. After getting my toes wet in that class I decided to switch my major to programming. Since then I've been making fun programming projects both solo and with my friends. I like all of my projects for different reasons, but below is a highlights list.";

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
  <h3 class="unselectable">
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
  {#each DEV_DATA as item}
    <ImgCard cardItem={new ImgCardItem(item)} />
  {/each}
</div>

<style>
  .closer-header-expand-button {
    margin-top: -16px;
  }
</style>
