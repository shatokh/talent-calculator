<script>
  // Ничего не меняем — общий layout
</script>

<div
  class="relative w-full h-screen bg-cover bg-center"
  style="background-image: url('/images/backgrounds/background.png');"
>
  <div class="absolute inset-0 flex justify-center items-center">
    <slot />
  </div>
</div>
