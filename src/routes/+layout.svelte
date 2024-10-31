<script lang="ts">
	import 'beercss';
	import 'material-dynamic-colors';
	import { onMount } from 'svelte';

	onMount(async () => {
		await ui();
		await ui('theme', '#742594');
	});
</script>

<nav class="top center-align">
	<h6><b>BettaPanel</b></h6>
</nav>

<main class="responsive">
	<div class="large-space"></div>
	<div class="large-space"></div>

	<slot />
</main>
