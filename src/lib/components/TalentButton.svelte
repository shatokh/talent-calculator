<script lang="ts">
	import type { Talent } from '$lib/types';

	export let talent: Talent;
	export let isActive: boolean = false;
</script>

<button
	class="relative p-1"
	aria-pressed={isActive}
	class:rounded-full={talent.shape === 'round'}
	class:rounded={talent.shape === 'square'}
	class:clip-path-rhombus={talent.shape === 'rhombus'}
	class:active-state={isActive}
>
	<img src={talent.icon} alt={talent.nameRU} class="h-12 w-12" />
</button>
// TO DO : добавить поддержку для других форм (круг, квадрат и ромб)

<style>
	.clip-path-rhombus {
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}

	button {
		background: transparent;
		border: none;
		cursor: pointer;
		transition: box-shadow 0.2s ease;
		padding: 0;
	}

	.active-state {
		box-shadow: 0 0 8px rgba(255, 223, 0, 0.8);
		border: 2px solid gold;
	}

	img {
		display: block;
	}
</style>
