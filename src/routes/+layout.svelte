<script lang="ts">
	import { page } from '$app/stores';
	import type { EditableConfigSettings } from '$lib/api/models/EditableConfigSettings';
	import 'beercss';
	import 'material-dynamic-colors';
	import { onMount } from 'svelte';

	let { children, data }: { data: { editableConfig: EditableConfigSettings }; children: any } =
		$props();

	function generateGradient(hexColor: string, toLight: boolean): string {
		// Utility function to adjust brightness of a hex color
		function adjustBrightness(hex: string, factor: number): string {
			// Remove '#' if present and convert to integer
			let color = hex.startsWith('#') ? hex.slice(1) : hex;
			const rgb = parseInt(color, 16);

			// Extract RGB components
			let r = (rgb >> 16) & 0xff;
			let g = (rgb >> 8) & 0xff;
			let b = rgb & 0xff;

			// Adjust each color channel
			r = Math.min(255, Math.max(0, r + factor));
			g = Math.min(255, Math.max(0, g + factor));
			b = Math.min(255, Math.max(0, b + factor));

			// Convert back to hex and return
			return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
		}

		// Determine the factor for lightening or darkening
		const brightnessFactor = toLight ? 80 : -80;
		const adjustedColor = adjustBrightness(hexColor, brightnessFactor);

		// Generate the CSS gradient
		return `linear-gradient(90deg, ${hexColor}, ${adjustedColor})`;
	}

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

<nav id="root-navbar" class="top surface">
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
		color: var(--primary);
	}
</style>
