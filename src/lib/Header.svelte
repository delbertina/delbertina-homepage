<script lang="ts">
  import LinkImgButton from "./LinkImgButton.svelte";

  export let title: string;
</script>

<div class="header-wrapper">
  <LinkImgButton link="/" title="Back to home page" />
  <h1 class="unselectable">
    {title}
  </h1>
</div>
<div class="header-padding" />

<style>
  .header-wrapper {
    height: 64px;
    padding: 8px;
    background: rgb(60, 60, 60);
    background: -moz-linear-gradient(
      180deg,
      rgba(60, 60, 60, 1) 50%,
      rgba(60, 60, 60, 0.5) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(60, 60, 60, 1) 50%,
      rgba(60, 60, 60, 0.5) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(60, 60, 60, 1) 50%,
      rgba(60, 60, 60, 0.5) 100%
    );
    min-width: 100%;
    position: fixed;
    display: flex;
    gap: 16px;
    & > a {
      height: inherit;

      & > img {
        height: inherit;
        width: inherit;
      }
    }
    & > h1 {
      margin: unset;
      align-self: center;
    }
  }
  @media (max-width: 900px) {
    .header-wrapper > h1 {
        font-size: 2rem;
    }
  }
</style>
