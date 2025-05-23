<script lang="ts">
	// createEventDispatcher больше не нужен для on:click пропсов,
	// а для @render $slots.default() он также не используется.
	// Если у вас есть кастомные события, которые вы хотите отправлять,
	// вы можете использовать $on() или createEventDispatcher.

	export let onClick: () => void;
	export let testId: string = 'action-button';
	export let disabled: boolean = false;
	export let additionalClass: string = '';

	function handleClick() {
		if (!disabled) {
			onClick();
		}
	}
</script>

<button
	on:click={handleClick}
	{disabled}
	data-testid={testId}
	class={`
        relative z-10 mt-[50px] scale-150 transform rounded-lg border-2 border-black bg-[#6dc64e]
        px-8 py-3 text-lg
        font-bold text-[#E0E0C0] shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_6px_10px_rgba(0,0,0,0.6)]
        transition
        duration-100 ease-in-out hover:-translate-y-1
        hover:bg-[#7bc85e] hover:shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_8px_12px_rgba(0,0,0,0.7)] active:translate-y-1
        active:bg-[#61b047]
        active:shadow-[0_0_0_2px_#E0E0C0,_inset_0_2px_4px_rgba(255,255,255,0.4),_0_2px_4px_rgba(0,0,0,0.4)]
        ${additionalClass}
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    `}
>
	<slot />
</button>
