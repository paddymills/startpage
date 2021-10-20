<script>
	import { Github, Microsoftoutlook, Reddit, Spotify, Youtube } from "@icons-pack/svelte-simple-icons";
	import Monday from "./components/Monday.svelte";
	import Card from "./components/Card.svelte";


	let sites = [
		{
			title: "Hss",
			links: [
				{ title: "UltiPro",							url: "https://e14.ultipro.com/Login.aspx" },
				{ title: "ExProc", 							url: "https://apps.high.net/ExProc/" },
				{ title: "Markdown Notes", 					url: "https://dillinger.io/" },
				{ title: "SSRS",							url: "https://hiiboserv2.high.net/Reports/favorites" }
			]
		},
		{
			title: "SigmaNest/NX",
			links: [
				{ title: "Sim Trans", 						url: "http://hssappserv1:3000/" },
				{ title: "SigmaNest License Server",		url: "http://hssappserv1:5055/" },
				{ title: "SigmaNest connect", 				url: "https://connect.sigmanest.com/" },
				{ title: "Sim Trans Docs", 					url: "http://hssappserv1:3000/HelpCenter/content/home.htm" },
				{ title: "SigmaNest Docs", 					url: "file:///C:/Program%20Files/SigmaTEK/SigmaNEST%20X1.7%20SP5/Help/HelpCenter/Content/Home.htm" },
				{ title: "NX12 Docs", 						url: "https://docs.plm.automation.siemens.com/tdoc/nx/12/nx_help/#uid:index" },
			]
		},
		{
			title: "Dev",
			links: [
				{ title: "Riddle <rust fiddle>", 			url: "https://play.rust-lang.org/" },
				{ title: "crates.io", 						url: "https://crates.io/" },
				{ title: "Rust <learn>", 					url: "https://www.rust-lang.org/learn" },
				{ title: "Rust Nursery - Cookbook", 		url: "https://rust-lang-nursery.github.io/rust-cookbook/" },
				{ title: "Rust-by-example", 				url: "https://doc.rust-lang.org/rust-by-example/" },
				{ title: "Rust-by-example Ext", 			url: "https://rust-by-example-ext.com/" },
				{ title: "Rust too-many-lists", 			url: "https://rust-unofficial.github.io/too-many-lists/" },
			]
		},
		{
			title: "DevDocs",
			links: [
				{ title: "devdocs.io", 						url: "https://devdocs.io/" },

				// javascript
				{ title: "Svelte Docs",						url: "https://svelte.dev" },
				{ title: "MDN { JavaScript }", 				url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

				// python
				{ title: "pyodbc",	 						url: "https://github.com/mkleehammer/pyodbc/wiki" },
				{ title: "xlwings", 						url: "https://docs.xlwings.org/en/stable/api.html" },

				// rust
				{ title: "Rust::std", 						url: "https://doc.rust-lang.org/std/index.html" },
			]
		}
	];
</script>

<main>
	<div id="icons">
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