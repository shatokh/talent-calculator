<script lang="ts">
  interface ClassMenuItem {
    id: string;
    nameRU: string;
    nameEN: string;
    iconPath: string;
  }

  const row1: ClassMenuItem[] = [
    { id: 'guardian', nameRU: 'Страж', nameEN: 'Guardian', iconPath: '/images/classes/guardian.png' },
    { id: 'alchemist', nameRU: 'Алхимик', nameEN: 'Alchemist', iconPath: '/images/classes/alchemist.png' }
  ];
  const row2: ClassMenuItem[] = [
    { id: 'shadow', nameRU: 'Тень', nameEN: 'Shadow', iconPath: '/images/classes/shadow.png' },
    { id: 'hunter', nameRU: 'Охотник', nameEN: 'Hunter', iconPath: '/images/classes/hunt.png' },
    { id: 'mage', nameRU: 'Маг', nameEN: 'Mage', iconPath: '/images/classes/mage.png' }
  ];
</script>

<!-- Полноэкранный фоновой контейнер -->
<div class="relative w-full h-screen bg-cover bg-center" style="background-image: url('/images/backgrounds/background.png');">
  <!-- Абсолютный контейнер, центрированный по обеим осям -->
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-[75px]">
    <!-- Первый ряд: 2 иконки -->
    <div class="flex gap-x-[75px]">
      {#each row1 as item}
        <a href={`/class/${item.id}`} class="flex flex-col items-center">
          <img
            src={item.iconPath}
            alt={item.nameRU}
            class="w-[100px] h-[100px] filter brightness-75 transition duration-200 hover:brightness-100 hover:drop-shadow-lg"
          />
          <span class="mt-2 text-white text-lg font-semibold">{item.nameRU}</span>
        </a>
      {/each}
    </div>
    <!-- Второй ряд: 3 иконки -->
    <div class="flex gap-x-[75px]">
      {#each row2 as item}
        <a href={`/class/${item.id}`} class="flex flex-col items-center">
          <img
            src={item.iconPath}
            alt={item.nameRU}
            class="w-[100px] h-[100px] filter brightness-75 transition duration-200 hover:brightness-100 hover:drop-shadow-lg"
          />
          <span class="mt-2 text-white text-lg font-semibold">{item.nameRU}</span>
        </a>
      {/each}
    </div>
  </div>
</div>
