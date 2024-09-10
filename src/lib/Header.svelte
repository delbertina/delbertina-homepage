<script lang="ts">
  import LinkImgButton from "./LinkImgButton.svelte";

  export let title: string;
</script>

<div class="header-wrapper">
  <LinkImgButton link="/" title="Back to home page" />
  <!-- <div> -->
  <h1>
    {title}
  </h1>
  <!-- </div> -->
</div>

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
      margin-top: -8px;
    }
  }
</style>
