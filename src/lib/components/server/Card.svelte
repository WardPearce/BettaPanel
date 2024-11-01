<script lang="ts">
	import type { ServerInfo } from '$lib/api/models/ServerInfo';
	import type { ServerRunning } from '$lib/api/models/ServerRunning';
	import { puffer } from '$lib/const';
	import { onMount } from 'svelte';

	let props: { server: ServerInfo } = $props();
	let serverStatus: ServerRunning | false = $state(false);

	onMount(async () => {
		if (props.server.canGetStatus) {
			serverStatus = await puffer.default.getApiServersStatus(props.server.id as string);
		} else {
			serverStatus = false;
		}
	});

	async function copy(event: MouseEvent, value: string) {
		event.preventDefault();
		await navigator.clipboard.writeText(value);
	}

	async function togglePowerAction(event: MouseEvent) {
		event.preventDefault();
		if (!serverStatus) return;

		if (serverStatus.running) {
			await puffer.default.postApiServersStop(props.server.id as string);
			serverStatus.running = false;
		} else {
			await puffer.default.postApiServersStart(props.server.id as string);
			serverStatus.running = true;
		}
	}
</script>

<a href={`/me/server/${props.server.id}`} class="row padding surface-container round">
	{#if props.server.icon}
		<img
			class="round small-padding"
			alt={`Icon for ${props.server.type}`}
			src={`${import.meta.env.VITE_DEFAULT_PUFFER_PANEL}/img/icons/${props.server.icon}.png`}
		/>
	{/if}
	<div class="max">
		<h6 class="small">{props.server.name}</h6>
	</div>
	<button class="chip" onclick={(event) => copy(event, `${props.server.ip}:${props.server.port}`)}>
		<span>{props.server.ip}:{props.server.port}</span>
	</button>
	{#if props.server.node}
		<span class="chip">
			<i>network_node</i>
			<span>{props.server.node?.name}</span>
		</span>
	{/if}
	{#if props.server.canGetStatus}
		<button class="small" onclick={togglePowerAction}>
			<i>
				{#if serverStatus}
					{#if serverStatus.running}
						close
					{:else}
						play_arrow
					{/if}
				{/if}
			</i>
		</button>
	{/if}
</a>
