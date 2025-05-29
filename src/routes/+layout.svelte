<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  
  // Inject Vercel Web Analytics —
  // In production, /_vercel/insights/script.js will be loaded automatically after deploy
  inject({ mode: dev ? 'development' : 'production' });

  let { children } = $props();
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Talent Calculator | Choose Your Class</title>
  <!-- ... other meta tags ... -->

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children()}

<style global>
  html, body { height: 100%; margin: 0; padding: 0; }
  body {
    background-color: #1a1a1a;
    color: #f0ff0f;
    font-family: sans-serif;
  }
</style>
