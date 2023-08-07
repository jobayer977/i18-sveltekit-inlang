<script>
	import { i, language, switchLanguage } from '@inlang/sdk-js';

	async function switchLanguageToGerman() {
		if (language === 'en') {
			await switchLanguage('de');
		} else {
			await switchLanguage('en');
		}
		window.location.reload();
	}
</script>

<h2>
	{i('welcome')}
</h2>
<nav>
	<a href="/"> Home </a>
	<a href="/{language}/about"> About </a>
</nav>
<br />
<button on:click={switchLanguageToGerman}>
	Switch language to
	{#if language === 'en'}
		german
	{:else}
		english
	{/if}
</button>
<hr />

<slot />
