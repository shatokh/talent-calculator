<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const cls = $page.params.className;

	// Убедитесь, что путь к вашей картинке правильный
	// Теперь ожидаем `/images/talents/mage/mage1.png`
	const imgSrc = `/images/talents/${cls}/${cls}1.png`;

	const getClassNameRU = (id: string): string => {
		const names: { [key: string]: string } = {
			guardian: 'Страж',
			shadow: 'Тень',
			hunter: 'Охотник',
			// ИЗМЕНЕНИЕ ЗДЕСЬ:
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

<button
	on:click={goBackToMain}
	class="
    absolute top-4 left-4
    z-10 transform
    rounded-lg border border-yellow-900
    bg-yellow-800 px-4 py-2
    text-lg font-bold
    text-white shadow-lg transition
    duration-200 ease-in-out hover:scale-105
    hover:border-yellow-800 hover:bg-yellow-700
    hover:shadow-xl
  "
>
	Вернуться
</button>

{#if ['guardian', 'shadow', 'hunter', 'mage', 'alchemist'].includes(cls)}
	<img
		src={imgSrc}
		alt={`Talent tree for ${displayName}`}
		class="
      h-auto
      w-full max-w-xl
      object-contain sm:w-auto sm:max-w-2xl md:max-w-4xl
      lg:max-w-[1000px]
    "
		style="max-height: 80vh;"
	/>
{:else}
	<p class="text-center text-xl text-white">
		Дерево талантов для «{displayName}» скоро здесь появится.
	</p>
{/if}

<style>
	p {
		text-align: center;
	}
</style>
