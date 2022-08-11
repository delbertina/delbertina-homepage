<script>
    import LinkButton from '../lib/LinkButton.svelte';
    import logo from '../assets/face-bust.png';

    function handleClick(url) {
        window.open(url, '_blank').focus();
    }
</script>
  
<main>
    <img src={logo} alt="delbertina Logo" />
    <h1>Welcome to my website</h1>
    <h3>
        I've been into computers since I was 5.
        My first computer ran Windows 95 and I got substantial experience troubleshooting problems on that computer before the internet.
        I've been techy from a young age both learning how to fix physical electronics and having fun with inspect element on websites.
        My first real program was written in my HS digital electronics class.
        That class was manufacturing and automation focused so we wrote programs in BASIC for simple robots, C programs for VEX robots, and G-Code for CNC machines.
        After getting my toes wet in that class I decided to switch my major to programming.
        Since then I've been making fun programming projects both solo and with my friends.
        I like all of my projects for different reasons, but below is a highlights list.
    </h3>
    <LinkButton description="Home" link="/"/>
</main>
<div class="content">
    <div class="card" on:click={() => handleClick("https://delbertina.com")}>
        <h2>delbertina.com</h2>
        <h3>The website you're on right now!</h3>
        <p>
            This project was built using svelte.
            I picked svelte after researching different popular frameworks.
            It's new and generally seems to be well-loved.
            That's how react started out and now it's more popular than the old hats of Angular & Vue.
        </p>
        <div class="card-footer">
            Solo :: June 2022
        </div>
    </div>
    <div class="card" on:click={() => handleClick("https://magnarisa.net")}>
        <h2>magnarisa.net</h2>
        <h3>A website I made with friends for our internet community.</h3>
        <p>
            This projects was built using Angular 12.
            I picked Angular because at the time a website was very much needed and Angular was the only frontend I knew.
            It was a labor of love over the years that originally started as just a helper site for people to easily visit a list of vote links.
            It morphed into a full-blown website with a dynamic map, and various info pages.
            The current version of this website was built mobile-first and I planned on trying to adapt it to be a PWA.
            As of writing this, this project is currently on the backburner for me personally.
        </p>
        <div class="card-footer">
            Solo :: July 2018
        </div>
    </div>
    <div class="card">
        <h2>placeholder</h2>
        <h3>placeholder</h3>
        <p>
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
        </p>
        <div class="card-footer">
            Solo :: placeholder 2022
        </div>
    </div>
    <div class="card">
        <h2>placeholder</h2>
        <h3>placeholder</h3>
        <p>
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
        </p>
        <div class="card-footer">
            Solo :: placeholder 2022
        </div>
    </div>
</div>