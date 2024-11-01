<script lang="ts">
	import { puffer } from '$lib/const';
	import { onMount, tick } from 'svelte';

	let { data }: { data: { serverId: string; websocket: WebSocket } } = $props();

	let serverCommand: string = $state('');
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
		await puffer.default.postApiServersConsole(data.serverId, serverCommand);
		serverCommand = '';
	}
</script>

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
