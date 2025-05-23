// 1-undefined.js
console.log(notDeclaredVar);
const text = "Используются двойные кавычки";
let count: number = "строка вместо числа";
<!-- 5-svelte.svelte -->
<script>
  // $props разрешены, а вот $wrongGlobal — нет
  console.log($props, $wrongGlobal);
</script>
<div>Test</div>