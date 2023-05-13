<script>
  import LinkButton from "../lib/LinkButton.svelte";
  import logo from "../assets/face-bust.png";

  function handleClick(url) {
    window.open(url, "_blank").focus();
  }
</script>

<main>
  <img src={logo} alt="delbertina Logo" />
  <h1>Digital Artist</h1>
  <LinkButton description="Home" link="/" />
</main>
<div class="content">
  <div
    class="card"
    on:click={() => handleClick("https://i.imgur.com/bNfO7IV.png")}
  >
    <div class="card-img">
      <img
        class="card-img-inner"
        width="300px"
        src="https://i.imgur.com/bNfO7IV.png"
        alt="Wallpaper of 2 people"
      />
    </div>
    <div class="card-content">
      <h2>Toy's Birthday Wallpaper</h2>
      <h3>A standoff between 2 friends</h3>
      <p>
        I drew this wallpaper for a friend as a birthday gift. It took a while,
        but it was fun to practice for drawing complex things.
      </p>
      <div class="card-footer">March 2016</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() => handleClick("https://i.imgur.com/qmmztck.png")}
  >
    <div class="card-img">
      <img
        class="card-img-inner"
        width="300px"
        src="https://i.imgur.com/qmmztck.png"
        alt="Wallpaper of 2 people"
      />
    </div>
    <div class="card-content">
      <h2>TJ's Birthday Wallpaper</h2>
      <h3>An awkward situation between 2 friends</h3>
      <p>
        I drew this wallpaper for a friend as a birthday gift. I tried to
        include many things that they like while also being different than the
        first one.
      </p>
      <div class="card-footer">Feb 2017</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() => handleClick("https://i.imgur.com/VCcACqx.png")}
  >
    <div class="card-img">
      <img
        class="card-img-inner"
        width="300px"
        src="https://i.imgur.com/VCcACqx.png"
        alt="Blocky drawing of a dog"
      />
    </div>
    <div class="card-content">
      <h2>Milo the Dog</h2>
      <h3>Blocky drawing of a friend's dog</h3>
      <p>
        I drew this profile picture for a friend. It's a representation of their
        dog that reflects on how silly they are. This was one of my first
        digital art projects.
      </p>
      <div class="card-footer">March 2014</div>
    </div>
  </div>
</div>
