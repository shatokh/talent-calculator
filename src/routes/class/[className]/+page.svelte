<script lang="ts">
  import { page } from '$app/stores';
  const cls = $page.params.className;
  // Попытаемся подгрузить `/static/images/talents/<cls>/<cls>1.png`
  const imgSrc = `/images/talents/${cls}/${cls}1.png`;
</script>

{#if cls === 'mage' || cls === 'shadow' || cls === 'hunter' || cls === 'guardian' || cls === 'alchemist'}
  <img src={imgSrc}
       alt={`Talent tree for ${cls}`}
       width="1000"
       height="500"
       class="object-contain" />
{:else}
  <p class="text-white text-xl">
    Дерево талантов для «{cls}» скоро здесь появится.
  </p>
{/if}
