<script>
	// если потребуется динамика — сюда можно импортировать SEO-компонент
</script>

<svelte:head>
	<!-- Специфические override, если эта страница имеет другой смысл -->
	<title>Class Talent Calculator</title>
	<meta name="description" content="Skill trees in the Talent Calculator." />
</svelte:head>

<div
	class="relative flex h-screen w-full items-center justify-center bg-cover bg-center p-4"
	style="background-image: url('/images/backgrounds/background.png');"
>
	<slot />
</div>
