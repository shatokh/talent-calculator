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
    disabled={disabled}
    data-testid={testId}
    class={`
        mt-[50px] scale-150 relative z-10 px-8 py-3 rounded-lg text-lg font-bold
        bg-[#6dc64e] hover:bg-[#7bc85e] active:bg-[#61b047]
        text-[#E0E0C0] border-2 border-black
        shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_6px_10px_rgba(0,0,0,0.6)]
        transition duration-100 ease-in-out
        transform hover:-translate-y-1 active:translate-y-1
        hover:shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_8px_12px_rgba(0,0,0,0.7)]
        active:shadow-[0_0_0_2px_#E0E0C0,_inset_0_2px_4px_rgba(255,255,255,0.4),_0_2px_4px_rgba(0,0,0,0.4)]
        ${additionalClass}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
>
    <slot />
</button>