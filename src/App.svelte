<script>
  import logo from './assets/face-bust.png'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Welcome to my website</h1>
  <h3>(Website currently WIP)</h3>

  <Counter />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #1e1e24;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  h3 {
    color: white;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
