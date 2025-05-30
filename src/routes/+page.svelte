<!-- src/routes/+page.svelte -->
<script lang="ts">
  interface ClassMenuItem { id: string; nameRU: string; iconPath: string }
  const row1: ClassMenuItem[] = [
    { id: 'guardian',  nameRU: 'Страж',    iconPath: '/images/classes/guardian.png' },
    { id: 'alchemist', nameRU: 'Алхимик',  iconPath: '/images/classes/alchemist.png' }
  ];
  const row2: ClassMenuItem[] = [
    { id: 'shadow', nameRU: 'Тень',    iconPath: '/images/classes/shadow.png' },
    { id: 'hunter', nameRU: 'Охотник', iconPath: '/images/classes/hunter.png' },
    { id: 'mage',   nameRU: 'Маг',     iconPath: '/images/classes/mage.png' }
  ];
  const items = [...row1, ...row2];
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div
  class="relative w-full h-screen bg-cover bg-center"
  style="background-image: url('/images/backgrounds/background.png');"
>
  <!-- DESKTOP (md+): две строки, иконки 100×100 px без изменений -->
  <div class="hidden md:block">
    <div
      class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2
             flex flex-col items-center gap-y-[75px]"
    >
      <div class="flex gap-x-[75px]">
        {#each row1 as item (item.id)}
          <a href={`/class/${item.id}`} class="flex flex-col items-center">
            <div class="w-[100px] h-[100px] overflow-hidden">
              <img
                src={item.iconPath}
                alt={item.nameRU}
                class="w-full h-full object-contain
                       filter brightness-75 transition duration-200
                       hover:brightness-100 hover:drop-shadow-lg"
              />
            </div>
            <span class="mt-2 text-[1.5rem] font-extrabold text-[#FFD700] drop-shadow-lg">
              {item.nameRU}
            </span>
          </a>
        {/each}
      </div>
      <div class="flex gap-x-[75px]">
        {#each row2 as item (item.id)}
          <a href={`/class/${item.id}`} class="flex flex-col items-center">
            <div class="w-[100px] h-[100px] overflow-hidden">
              <img
                src={item.iconPath}
                alt={item.nameRU}
                class="w-full h-full object-contain
                       filter brightness-75 transition duration-200
                       hover:brightness-100 hover:drop-shadow-lg"
              />
            </div>
            <span class="mt-2 text-[1.5rem] font-extrabold text-[#FFD700] drop-shadow-lg">
              {item.nameRU}
            </span>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- MOBILE (<md): сетка иконок 72×72 px -->
  <div class="md:hidden absolute inset-0 flex items-center justify-center p-4">
    <div class="grid grid-cols-2 gap-6 w-full max-w-xs">
      {#each items as item (item.id)}
        <a href={`/class/${item.id}`} class="flex flex-col items-center">
          <div class="w-[72px] h-[72px] overflow-hidden">
            <img
              src={item.iconPath}
              alt={item.nameRU}
              width="72"
              height="72"
              loading="lazy"
              class="w-full h-full object-contain
                     filter brightness-75 transition duration-200
                     hover:brightness-100 hover:drop-shadow-lg"
            />
          </div>
          <span class="mt-1 text-sm font-semibold text-yellow-400 drop-shadow-lg text-center">
            {item.nameRU}
          </span>
        </a>
      {/each}
    </div>
  </div>
</div>
