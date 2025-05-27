<!-- src/routes/index.svelte -->
<script lang="ts">
  interface ClassMenuItem {
    id: string;
    nameRU: string;
    nameEN: string;
    iconPath: string;
  }

  const row1: ClassMenuItem[] = [
    {
      id: 'guardian',
      nameRU: 'Страж',
      nameEN: 'Guardian',
      iconPath: '/images/classes/guardian.png'
    },
    {
      id: 'alchemist',
      nameRU: 'Алхимик',
      nameEN: 'Alchemist',
      iconPath: '/images/classes/alchemist.png'
    }
  ];

  const row2: ClassMenuItem[] = [
    { id: 'shadow',  nameRU: 'Тень',    nameEN: 'Shadow',  iconPath: '/images/classes/shadow.png' },
    { id: 'hunter',  nameRU: 'Охотник', nameEN: 'Hunter',  iconPath: '/images/classes/hunter.png' },
    { id: 'mage',    nameRU: 'Маг',     nameEN: 'Mage',    iconPath: '/images/classes/mage.png' }
  ];
</script>

<div
  class="relative h-screen w-full bg-cover bg-center"
  style="background-image: url('/images/backgrounds/background.png');"
>
  <div
    class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform
           flex-col items-center gap-y-[75px]"
  >
    <!-- Первый ряд: 2 иконки -->
    <div class="flex gap-x-[75px]">
      {#each row1 as item (item.id)}
        <a
          href={`/class/${item.id}`}
          class="flex flex-col items-center"
          data-testid={`class-link-${item.id}`}
        >
          <img
            src={item.iconPath}
            alt={item.nameRU}
            class="h-[100px] w-[100px]
                   brightness-75 filter
                   transition duration-200
                   hover:brightness-100 hover:drop-shadow-lg"
            data-testid={`class-icon-${item.id}`}
          />
          <span
            class="mt-2
                   text-lg font-bold text-[#E0E0C0]
                   shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_6px_10px_rgba(0,0,0,0.6)]
                   transition duration-100 ease-in-out
                   hover:-translate-y-1 hover:drop-shadow-lg"
            data-testid={`class-label-${item.id}`}
          >
            {item.nameRU}
          </span>
        </a>
      {/each}
    </div>

    <!-- Второй ряд: 3 иконки -->
    <div class="flex gap-x-[75px]">
      {#each row2 as item (item.id)}
        <a
          href={`/class/${item.id}`}
          class="flex flex-col items-center"
          data-testid={`class-link-${item.id}`}
        >
          <img
            src={item.iconPath}
            alt={item.nameRU}
            class="h-[100px] w-[100px]
                   brightness-75 filter
                   transition duration-200
                   hover:brightness-100 hover:drop-shadow-lg"
            data-testid={`class-icon-${item.id}`}
          />
          <span
            class="mt-2
                   text-lg font-bold text-[#E0E0C0]
                   shadow-[0_0_0_2px_#E0E0C0,_inset_0_4px_6px_rgba(255,255,255,0.4),_0_6px_10px_rgba(0,0,0,0.6)]
                   transition duration-100 ease-in-out
                   hover:-translate-y-1 hover:drop-shadow-lg"
            data-testid={`class-label-${item.id}`}
          >
            {item.nameRU}
          </span>
        </a>
      {/each}
    </div>
  </div>
</div>