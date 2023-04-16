<script>
    import LinkButton from '../lib/LinkButton.svelte';
    import logo from '../assets/face-bust.png';
</script>
  
<main>
    <img src={logo} alt="delbertina Logo" />
    <h1>Digital Artist</h1>
    <LinkButton description="Home" link="/"/>
</main>
<div class="content">
    <div class="card">
        <h2>picture 1</h2>
        <h3>subtitle</h3>
        <p>
            More information on the image
        </p>
        <div class="card-footer">
            June 2022
        </div>
    </div>
</div>