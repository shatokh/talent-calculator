<script lang="ts">
    import { createEventDispatcher } from 'svelte'; // createEventDispatcher все еще доступен, но $on() может быть альтернативой для кастомных событий в Svelte 5. Для on:click пропсов это не нужно.

    // Объявление пропсов с использованием $props().
    // Это деструктуризация объекта, который возвращает $props().
    // Мы задаем значения по умолчанию прямо здесь.
    let { 
        onClick, 
        testId = 'action-button', 
        disabled = false, 
        additionalClass = '' 
    } = $props<{
        onClick: () => void;
        testId?: string; 
        disabled?: boolean; 
        additionalClass?: string; 
    }>();

    // Получение слотов с использованием $slots()
    // Это функция, которая возвращает объект, содержащий переданные слоты.
    // Нам не нужно явно проверять slots.default, так как <slot /> сам по себе рендерит default слот, если он есть.
    const slots = $slots(); //

    function handleClick() {
        if (!disabled) {
            // Если onClick - это функция, переданная как пропс, то просто вызываем её.
            onClick(); 
        }
    }
</script>

<button
    onclick={handleClick} disabled={disabled}
    data-test-id={testId}
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
    <slot /> </button>