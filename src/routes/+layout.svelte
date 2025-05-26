<script lang="ts">
	import '../app.css'; // Импортируем глобальный Tailwind CSS
	let { children } = $props();
</script>

<svelte:head>
	<script src="/_vercel/insights/script.js" defer></script>
</svelte:head>

{@render children()}

<style global>
	/* Убедимся, что HTML и BODY занимают всю доступную высоту */
	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
		/* overflow: hidden; */
	}

	body {
		background-color: #1a1a1a;
		color: #f0ff0f;
		font-family: sans-serif;
	}
</style>