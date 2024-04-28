<script lang="ts">
  import LinkButton from "../lib/LinkButton.svelte";
  import LinkIconButton from "../lib/LinkImgButton.svelte";
</script>

<main>
  <LinkIconButton link="/" title="Back to home page" />
  <h1 class="unselectable">Welcome to my website</h1>
  <h3 class="unselectable">Use the links below to learn more about my marketable skills.</h3>

  <div class="link-button-row">
    <LinkButton description="Developer" link="/dev" title="My portfolio of software projects" />
    <LinkButton description="Photographer" link="/photo" title="Pictures of mine that I'm particularly fond of" />
    <!-- <LinkButton description="Origamist" link="/origami"/> -->
    <LinkButton description="Video Editor" link="/video" title="Complex video edits that show my skills" />
    <LinkButton description="Digital Artist" link="/art" title="Artwork that I've made using computer programs" />
  </div>
</main>
