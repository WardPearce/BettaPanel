<script lang="ts">
	import { page } from '$app/stores';
	import type { User } from '$lib/api';
	import type { EditableConfigSettings } from '$lib/api/models/EditableConfigSettings';
	import { generateGradient, stringToSha256 } from '$lib/misc';
	import 'beercss';
	import 'material-dynamic-colors';
	import { onMount } from 'svelte';

	let {
		children,
		data
	}: { data: { editableConfig: EditableConfigSettings; self: User }; children: any } = $props();

	let emailHash: string = $state('');

	onMount(async () => {
		await ui();
		if (data.editableConfig.themes?.settings) {
			try {
				const settings = JSON.parse(data.editableConfig.themes.settings);
				await ui('theme', settings.color);
				const navBar = document.getElementById('header');
				if (navBar) navBar.style.background = generateGradient(settings.color, false);
			} catch {}
		}

		if (data.self && data.self.email) {
			emailHash = await stringToSha256(data.self.email);
		}
	});
</script>

<header id="header" class="fixed responsive max">
	<div style="display: flex; align-items: center;">
		<div style="flex: 1; text-align: center;">
			<a href={$page.url.pathname === '/' ? '/' : '/me'}>
				<h5>
					<b>
						{data.editableConfig.branding?.name === 'PufferPanel'
							? 'BettaPanel'
							: data.editableConfig.branding?.name}
					</b>
				</h5>
			</a>
		</div>
		{#if emailHash}
			<img
				style="position: absolute; top: -1; right: 0;"
				class="circle large"
				src={`https://gravatar.com/avatar/${emailHash}?d=mp`}
				alt="Profile from gravatar"
			/>
		{/if}
	</div>
</header>

<main class="responsive">
	<div class="small-space"></div>

	{@render children()}
</main>

<style>
	h5 {
		font-family: sonsie;
		color: var(--primary-inverse);
		margin: 0;
		flex-grow: 1;
		text-align: center;
	}
</style>
