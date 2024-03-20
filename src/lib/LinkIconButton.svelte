<script>
    import { Router, Link } from "svelte-navigator";
    import logo from "../assets/face-bust.png";
    export let link
  </script>
  
  <Router>
    <Link to="{link}" tabindex={-1}>
        <img src={logo} alt="delbertina Logo" />
    </Link>
  </Router>