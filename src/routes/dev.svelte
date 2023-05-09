<script>
  import LinkButton from "../lib/LinkButton.svelte";
  import logo from "../assets/face-bust.png";

  function handleClick(url) {
    window.open(url, "_blank").focus();
  }
</script>

<main>
  <img src={logo} alt="delbertina Logo" />
  <h1>Software Development</h1>
  <h3>
    I've been into computers since I was 5. My first computer ran Windows 95 and
    I got substantial experience troubleshooting problems on that computer
    before the internet. I've been techy from a young age both learning how to
    fix physical electronics and having fun with inspect element on websites. My
    first real program was written in my HS digital electronics class. That
    class was manufacturing and automation focused so we wrote programs in BASIC
    for simple robots, C programs for VEX robots, and G-Code for CNC machines.
    After getting my toes wet in that class I decided to switch my major to
    programming. Since then I've been making fun programming projects both solo
    and with my friends. I like all of my projects for different reasons, but
    below is a highlights list.
  </h3>
  <LinkButton description="Home" link="/" />
</main>
<div class="content">
  <div class="card" on:click={() => handleClick("https://delbertina.com")}>
    <div class="card-img">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
    </div>
    <div class="card-content">
      <h2>delbertina.com</h2>
      <h3>The website you're on right now!</h3>
      <p>
        This project was built using svelte. I picked svelte after researching
        different popular frameworks. It's new and generally seems to be
        well-loved. That's how react started out and now it's more popular than
        the old hats of Angular & Vue.
      </p>
      <div class="card-footer">Solo :: June 2022</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() => handleClick("https://delbertina.github.io/ClipClopCam/")}
  >
    <div class="card-img">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
    </div>
    <div class="card-content">
      <h2>Clip Clop Cam</h2>
      <h3>Tiktok camera game filters for desktop webcams using WebGL</h3>
      <p>
        Uses Angular as a framework to remake camera games from the Tiktok app
        for desktop. These games are commonly played with friends, but a phone
        is way too small to see. Currently includes a faithful recreation of the
        popular 'Avoid the Box' game. The goal is to have multiple different
        games and explore the features of WebGL.
      </p>
      <div class="card-footer">Solo :: Feb 2023</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() => handleClick("https://delbertina.github.io/sound-cookies/")}
  >
  <div class="card-img">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
  </div>
    <div class="card-content">
      <h2>Sound Cookies</h2>
      <h3>React app of sounds that are a little bit more than a bite.</h3>
      <p>
        I thought of the idea for this app when looking at old VODs of my
        friends and I. It's intended to be like a sound board, but from people I
        know. Currently it's nearing all of the goal features I set out have in
        it. It was a great first project into learning React.
      </p>
      <div class="card-footer">Solo :: Feb 2022</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() =>
      handleClick("https://github.com/delbertina/PlayerHeadshotGrabber")}
  >
  <div class="card-img">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
  </div>
    <div class="card-content">
      <h2>Player Headshot Grabber</h2>
      <h3>
        Python script that uses selenium and pillow to get bust renders of
        Minecraft skins.
      </h3>
      <p>
        Was used to get thousands of images for a fun yearbook. I picked
        selenium because I took a class in college that used it and knew it
        would work for this. The pillow library was used to put a background on
        the transparent image and crop to size. This program was nessicary
        because the website that does these renders doesn't have an API for
        this. I was very pleased at the results and that I didn't have to do
        this by hand after all.
      </p>
      <div class="card-footer">Solo :: Nov 2020</div>
    </div>
  </div>
  <div class="card" on:click={() => handleClick("https://magnarisa.net")}>
    <div class="card-img">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
      </div>
    <div class="card-content">
      <h2>magnarisa.net</h2>
      <h3>A website I made with friends for our internet community.</h3>
      <p>
        This projects was built using Angular 12 and was developed it with
        mobile devices in mind. I picked Angular because at the time a website
        was very much needed and Angular was the only frontend I knew. It was a
        labor of love over the years that originally started as just a helper
        site for people to easily visit a list of vote links. It morphed into a
        full-blown website with a dynamic map, and various info pages. The
        current version of this website was built mobile-first and I planned on
        trying to adapt it to be a PWA. As of writing this, this project is
        currently on the backburner for me personally.
      </p>
      <div class="card-footer">With Friends :: July 2018</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() =>
      handleClick("https://github.com/delbertina/capacitor-plugin-pin-prompt")}
  >
  <div class="card-img">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
  </div>
    <div class="card-content">
      <h2>Capacitor Plugin Pin Prompt</h2>
      <h3>
        A capacitor plugin to prompt for Android device credentials and report
        results
      </h3>
      <p>
        Was made to solve a bug in the existing bug in the capacitor framework.
        I made this at work to solve an urgent customer issue.
      </p>
      <div class="card-footer">Solo :: Jun 2021</div>
    </div>
  </div>
  <div
    class="card"
    on:click={() => handleClick("https://github.com/delbertina/StartPageEmber")}
  >
  <div class="card-img">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="300px" src="https://i.imgur.com/ALzJgy3.mp4" autoplay loop/>
  </div>
    <div class="card-content">
      <h2>Start Page in Ember</h2>
      <h3>My custom browser start page built with Ember</h3>
      <p>
        An intentionally very bland and muted page to match my desktop theme.
        Helps me navigate quickly to sites that I frequently go to without
        cluttering up my bookmarks bar. It's better than using the bookmarks bar
        because it only takes 1 click to go to any one of the 20+ options.
      </p>
      <div class="card-footer">Solo :: June 2022</div>
    </div>
  </div>
</div>
