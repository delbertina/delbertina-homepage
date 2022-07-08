<script>
  import { Router, Route } from "svelte-navigator";
  import Dev from './routes/dev.svelte';
  import Photo from './routes/photo.svelte';
  import Origami from './routes/origami.svelte';
  import Video from './routes/video.svelte';
  import Art from './routes/art.svelte';
  import Home from './routes/home.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="dev" component={Dev} />
  <Route path="photo" component={Photo} />
  <Route path="origami" component={Origami} />
  <Route path="video" component={Video} />
  <Route path="art" component={Art} />
</Router>
