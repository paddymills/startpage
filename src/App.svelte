<script>
	import { Github, Microsoftoutlook, Openai, Reddit, Spotify, Youtube } from "@icons-pack/svelte-simple-icons";
	import Monday from "./components/Monday.svelte";
	import Card from "./components/Card.svelte";

	import sites from './sites.json';
</script>

<main>
	<div id="icons">
		<a href="https://chat.openai.com"><Openai color="#00A67E" /></a>
		<a href="https://outlook.office.com"><Microsoftoutlook color="#0072C6" /></a>
		<a href="https://production-control-force.monday.com/"><Monday /></a>
		<a href="https://github.com/paddymills"><Github color="#333" /></a>
		<a href="https://reddit.com"><Reddit color="#FF5700" /></a>
		<a href="https://open.spotify.com"><Spotify color="#1DB954" /></a>
		<a href="https://youtube.com"><Youtube color="#FF0000" /></a>
	</div>

	<div id="links">
	{#each sites as group}
		<Card {...group} />
	{/each}
	</div>
</main>

<style >
	div {
		display: flex;
		justify-content: space-around;
		align-items: stretch;
	}

	#icons {
		justify-content: center;
	}
	
	a {
		margin: 1em;
	}
</style>