<!-- src/routes/+page.svelte -->
<script lang="ts">
  interface ClassMenuItem {
    id: string;
    nameRU: string;
    nameEN: string;
    iconPath: string;
  }

  const row1: ClassMenuItem[] = [
    { id: 'guardian',  nameRU: 'Страж',    nameEN: 'Guardian', iconPath: '/images/classes/guardian.png' },
    { id: 'alchemist', nameRU: 'Алхимик',  nameEN: 'Alchemist', iconPath: '/images/classes/alchemist.png' }
  ];

  const row2: ClassMenuItem[] = [
    { id: 'shadow', nameRU: 'Тень',    nameEN: 'Shadow', iconPath: '/images/classes/shadow.png' },
    { id: 'hunter', nameRU: 'Охотник', nameEN: 'Hunter', iconPath: '/images/classes/hunter.png' },
    { id: 'mage',   nameRU: 'Маг',     nameEN: 'Mage',   iconPath: '/images/classes/mage.png' }
  ];
</script>

<div
  class="relative w-full h-screen bg-cover bg-center"
  style="background-image: url('/images/backgrounds/background.png');"
>
  <div
    class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2
           flex flex-col items-center gap-y-[75px]"
  >
    <!-- First row. 2 icons-->
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
            class="w-[100px] h-[100px]
                   filter brightness-75
                   transition duration-200
                   hover:brightness-100 hover:drop-shadow-lg"
            data-testid={`class-icon-${item.id}`}
          />
          <span
            class="
              mt-2
              text-[150%]
              font-extrabold
              text-[#FFD700]
              drop-shadow-lg
            "
            data-testid={`class-label-${item.id}`}
          >
            {item.nameRU}
          </span>
        </a>
      {/each}
    </div>

    <!-- Second row. 3 icons -->
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
            class="w-[100px] h-[100px]
                   filter brightness-75
                   transition duration-200
                   hover:brightness-100 hover:drop-shadow-lg"
            data-testid={`class-icon-${item.id}`}
          />
          <span
            class="
              mt-2
              text-[150%]
              font-extrabold
              text-[#FFD700]
              drop-shadow-lg
            "
            data-testid={`class-label-${item.id}`}
          >
            {item.nameRU}
          </span>
        </a>
      {/each}
    </div>
  </div>
</div>