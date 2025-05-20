<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

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

<div class="flex flex-col items-center justify-center" data-test-id="class-page-container">
    {#if ['guardian', 'shadow', 'hunter', 'mage', 'alchemist'].includes(cls)}
        <img
            src={imgSrc}
            alt={`Talent tree for ${displayName}`}
            class="h-auto w-full max-w-xl object-contain sm:w-auto sm:max-w-2xl md:max-w-4xl lg:max-w-[1000px]"
            style="max-height: 80vh;"
            data-test-id="talent-tree-image"
        />
    {:else}
        <p class="text-center text-xl text-white" data-test-id="talent-tree-placeholder">
            Дерево талантов для «{displayName}» скоро здесь появится.
        </p>
    {/if}

    <button
        on:click={goBackToMain}
        class="mt-[50px] scale-150 relative z-10 px-8 py-3 rounded-lg text-lg font-bold bg-[#6dc64e] hover:bg-[#7bc85e] active:bg-[#61b047] text-[#E0E0C0] border-2 border-black shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_6px_10px_rgba(0,0,0,0.6)] transition duration-100 ease-in-out transform hover:-translate-y-1 active:translate-y-1 hover:shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_8px_12px_rgba(0,0,0,0.7)] active:shadow-[0_0_0_2px_#E0E0C0,_inset_0_2px_4px_rgba(255,255,255,0.4),_0_2px_4px_rgba(0,0,0,0.4)]"
        data-test-id="go-back-button"
    >
        Вернуться
    </button>
</div>

<style>
    p {
        text-align: center;
    }
</style>