<script>
  import LinkButton from "../lib/LinkButton.svelte";
  import logo from "../assets/face-bust.png";
</script>

<main>
  <img src={logo} alt="delbertina Logo" />
  <h1>Video Editing</h1>
  <LinkButton description="Home" link="/" />
</main>
<div class="content">
  <div
    class="card"
  >
    <div class="card-img">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video width="300px" src="https://i.imgur.com/mgtvPhA.mp4" autoplay loop/>
    </div>
    <div class="card-content">
      <h2>Puppet</h2>
      <h3>Animated puppet, strings, and puppeteer</h3>
      <p>
        Hand animated in Davinci Resolve.
        A key milestone edit that to me reflects that I've sufficently mastered the basics of this software.
        Each, body part, string, etc are all animated individually with no automated shortcuts taken.
      </p>
      <div class="card-footer">April 2023</div>
    </div>
  </div>
</div>
