<script lang="ts">
    import { Router, Link } from "svelte-routing";
    import logo from "../assets/face-bust.png";
    export let link: string;
  </script>
  
  <Router>
    <Link to="{link}" tabindex={-1}>
        <img src={logo} alt="delbertina Logo" />
    </Link>
  </Router>