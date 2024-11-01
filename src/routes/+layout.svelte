<script lang="ts">
	import { page } from '$app/stores';
	import type { EditableConfigSettings } from '$lib/api/models/EditableConfigSettings';
	import { generateGradient } from '$lib/misc';
	import 'beercss';
	import 'material-dynamic-colors';
	import { onMount } from 'svelte';

	let { children, data }: { data: { editableConfig: EditableConfigSettings }; children: any } =
		$props();

	onMount(async () => {
		await ui();
		if (data.editableConfig.themes?.settings) {
			try {
				const settings = JSON.parse(data.editableConfig.themes.settings);
				await ui('theme', settings.color);
				const navBar = document.getElementById('root-navbar');
				if (navBar) navBar.style.background = generateGradient(settings.color, false);
			} catch {}
		}
	});
</script>

<nav id="root-navbar" class="top">
	<a href={$page.url.pathname === '/' ? '/' : '/me'}>
		<h5>
			<b
				>{data.editableConfig.branding?.name === 'PufferPanel'
					? 'BettaPanel'
					: data.editableConfig.branding?.name}</b
			>
		</h5>
	</a>
</nav>

<main class="responsive">
	<div class="large-space"></div>
	<div class="large-space"></div>

	{@render children()}
</main>

<style>
	nav h5 {
		font-family: sonsie;
		color: var(--primary-inverse);
	}
</style>
