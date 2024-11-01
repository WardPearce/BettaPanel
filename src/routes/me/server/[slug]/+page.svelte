<script lang="ts">
	import type { ServerStats } from '$lib/api';
	import { puffer } from '$lib/const';
	import prettyBytes from 'pretty-bytes';
	import { onMount, tick } from 'svelte';

	let { data }: { data: { serverId: string; websocket: WebSocket; stats: ServerStats } } = $props();

	let serverCommand: string = $state('');
	let cpuUsage = $state(data.stats.cpu);
	let memoryUsage = $state(data.stats.memory);
	let serverLogs: string = $state('');
	onMount(async () => {
		serverLogs = atob(`${(await puffer.default.getApiServersConsole(data.serverId, 0)).logs}`);
		scrollIntoView();

		data.websocket.addEventListener('message', (event: MessageEvent) => {
			let message: Record<string, any> | undefined = undefined;
			try {
				message = JSON.parse(event.data);
			} catch (error) {}

			if (message) {
				if (message.type === 'console') {
					serverLogs += atob(message.data.logs);
					scrollIntoView();
				} else if (message.type === 'stat') {
					cpuUsage = message.data.cpu;
					memoryUsage = message.data.memory;
				}
			}
		});
	});

	async function scrollIntoView() {
		await tick();
		const consoleElement = document.getElementById('console');
		if (consoleElement) consoleElement.scrollTop = consoleElement.scrollHeight;
	}

	async function sendCommand(event: SubmitEvent) {
		event.preventDefault();
		try {
			await puffer.default.postApiServersConsole(data.serverId, serverCommand);
		} catch (error) {}
		serverCommand = '';
	}
</script>

<div class="grid">
	{#if cpuUsage !== undefined}
		<div class="m6 l6 s12">
			<article>
				<nav>
					<h6 class="max">CPU</h6>
					<h6>{Math.round(cpuUsage)}%</h6>
				</nav>
			</article>
		</div>
	{/if}
	{#if memoryUsage !== undefined}
		<div class="m6 l6 s12">
			<article>
				<nav>
					<h6 class="max">Memory</h6>
					<h6>{prettyBytes(memoryUsage)}</h6>
				</nav>
			</article>
		</div>
	{/if}
</div>

<article>
	<article id="console" class="surface-dim large" style="overflow: scroll;white-space: pre-line;">
		{serverLogs}
	</article>
	<form onsubmit={sendCommand}>
		<nav>
			<div class="field label border max">
				<input bind:value={serverCommand} type="text" />
				<label>Command</label>
			</div>
		</nav>
	</form>
</article>
