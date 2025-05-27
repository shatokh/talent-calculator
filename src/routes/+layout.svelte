<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<!-- Vercel Analytics -->
	<script src="/_vercel/insights/script.js" defer></script>

	<!-- Primary Meta Tags -->
	<title>Talent Calculator | Choose Your Class</title>
	<meta name="title" content="Talent Calculator | Choose Your Class" />
	<meta name="description" content="Choose your class and explore talent trees in this interactive SvelteKit-based Talent Calculator." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://your-vercel-domain.vercel.app/" />
	<meta property="og:title" content="Talent Calculator | Choose Your Class" />
	<meta property="og:description" content="Choose your class and explore talent trees in this interactive SvelteKit-based Talent Calculator." />
	<meta property="og:image" content="https://your-vercel-domain.vercel.app/images/og-banner.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://your-vercel-domain.vercel.app/" />
	<meta name="twitter:title" content="Talent Calculator | Choose Your Class" />
	<meta name="twitter:description" content="Choose your class and explore talent trees in this interactive SvelteKit-based Talent Calculator." />
	<meta name="twitter:image" content="https://your-vercel-domain.vercel.app/images/og-banner.png" />

	<!-- Favicon (при наличии) -->
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children()}

<style global>
	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	body {
		background-color: #1a1a1a;
		color: #f0ff0f;
		font-family: sans-serif;
	}
</style>
