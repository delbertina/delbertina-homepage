<script>
  import LinkButton from "../lib/LinkButton.svelte";
  import LinkIconButton from "../lib/LinkIconButton.svelte";
</script>

<main>
  <LinkIconButton link="/" />
  <h1>Welcome to my website</h1>
  <h3>Use the links below to learn more about my marketable skills.</h3>

  <div class="link-button-row">
    <LinkButton description="Developer" link="/dev" />
    <LinkButton description="Photographer" link="/photo" />
    <!-- <LinkButton description="Origamist" link="/origami"/> -->
    <LinkButton description="Video Editor" link="/video" />
    <LinkButton description="Digital Artist" link="/art" />
  </div>
</main>
