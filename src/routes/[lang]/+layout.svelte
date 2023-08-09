<script>
	import { i, language, switchLanguage } from '@inlang/sdk-js';
</script>

{i('welcome')}
<br />
{#if language === 'en'}
	<button on:click={() => switchLanguage('de')}> Switch to German </button>
{/if}
{#if language === 'de'}
	<button on:click={() => switchLanguage('en')}> Switch to English </button>
{/if}

<slot />
