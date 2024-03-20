<script>
    import LinkIconButton from '../lib/LinkIconButton.svelte';

    function handleClick(url) {
    window.open(url, "_blank").focus();
  }
</script>
  
<main>
    <LinkIconButton link="/" />
    <h1>Photography</h1>
</main>
<div class="content">
    <div class="card" on:click={() => handleClick("https://imgur.com/a/ARXaZJ5")}>
        <div class="card-img">
            <img class="card-img-inner" width="300px" src="https://i.imgur.com/TdJCncq.jpg" alt="A large bird that reminds me of a quail"/>
          </div>
          <div class="card-content">
        <h2>Quail & Friends</h2>
        <h3>Not an actual quail, but it reminds me of one.</h3>
        <p>
            A collection of pictures I took with my cheap camcorder of birds and stuff.
            These pictures are what made me realize I need a real camera.
        </p>
        <div class="card-footer">
            Jan 2021
        </div>
          </div>
    </div>
    <div class="card" on:click={() => handleClick("https://imgur.com/a/c6Ipsvj")}>
        <div class="card-img">
            <img class="card-img-inner" width="300px" src="https://i.imgur.com/x2pXhET.jpg" alt="A ginger tom"/>
          </div>
          <div class="card-content">
        <h2>Tommy the Ginger Tom</h2>
        <h3>The orangest cat of them all!</h3>
        <p>
            A nice neighborhood cat that lets me take his picture and is very cute.
            Sometimes elusive, but like to explore so you never know where he'll be.
        </p>
        <div class="card-footer">
            April 2021
        </div>
          </div>
    </div>
</div>