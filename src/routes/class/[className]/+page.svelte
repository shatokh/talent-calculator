<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import ActionButton from '$lib/components/ActionButton.svelte';

	const cls = $page.params.className;

	const imgSrc = `/images/talents/${cls}/${cls}1.png`;

	const getClassNameRU = (id: string): string => {
		const names: { [key: string]: string } = {
			guardian: 'Страж',
			shadow: 'Тень',
			hunter: 'Охотник',
			mage: 'Маг',
			alchemist: 'Алхимик'
		};
		return names[id] || 'Неизвестный класс';
	};
	const displayName = getClassNameRU(cls);

	function goBackToMain() {
		goto('/');
	}
</script>

<div class="flex flex-col items-center justify-center" data-testid="class-page-container">
	{#if ['guardian', 'shadow', 'hunter', 'mage', 'alchemist'].includes(cls)}
		<img
			src={imgSrc}
			alt={`Talent tree for ${displayName}`}
			class="h-auto w-full max-w-xl object-contain sm:w-auto sm:max-w-2xl md:max-w-4xl lg:max-w-[1000px]"
			style="max-height: 80vh;"
			data-testid="talent-tree-image"
		/>
	{:else}
		<p class="text-center text-xl text-white" data-testid="talent-tree-placeholder">
			Дерево талантов для «{displayName}» скоро здесь появится.
		</p>
	{/if}

	<ActionButton onClick={goBackToMain} testId="go-back-button">Вернуться</ActionButton>
</div>

<style>
	p {
		text-align: center;
	}
</style>
