<script>
  import logo from '../assets/face-bust.png';
  import LinkButton from '../lib/LinkButton.svelte';
</script>

<main>
    <img src={logo} alt="delbertina Logo" />
    <h1>Welcome to my website</h1>
    <h3>(Website currently WIP)</h3>

    <div class="link-button-row">
    <LinkButton description="Developer" link="/dev"/>
    <LinkButton description="Photographer" link="/photo"/>
    <LinkButton description="Origamist" link="/origami"/>
    <LinkButton description="Video Editor" link="/video"/>
    <LinkButton description="Digital Artist" link="/art"/>
    </div>
</main>