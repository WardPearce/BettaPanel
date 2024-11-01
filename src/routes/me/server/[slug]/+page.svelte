<script lang="ts">
	import Console from '$lib/components/server/Console.svelte';
	import { onDestroy, onMount } from 'svelte';

	let { data }: { data: { serverId: string } } = $props();

	let consoleFunc: Function;

	let websocket: WebSocket;
	onMount(async () => {
		const pufferUrl = new URL(import.meta.env.VITE_DEFAULT_PUFFER_PANEL);

		websocket = new WebSocket(
			`${pufferUrl.protocol === 'http:' ? 'ws' : 'wss'}://${pufferUrl.host}/api/servers/${data.serverId}/socket`
		);

		websocket.onmessage = (event: MessageEvent) => {
			let message: Record<string, any> | undefined = undefined;
			try {
				message = JSON.parse(event.data);
			} catch (error) {}

			if (message) {
				if (message.type === 'console') {
					consoleFunc(message.data);
				}
			}
		};
	});

	onDestroy(() => {
		websocket.close();
	});

	function handleWebhookReady(event: { detail: Function }) {
		consoleFunc = event.detail;
	}
</script>

<div>
	<nav class="tabbed small">
		<a class="active">
			<i>terminal</i>
			<span>Console</span>
		</a>
		<a>
			<i>analytics</i>
			<span>Analytics</span>
		</a>
		<a>
			<i>home_storage</i>
			<span>Files</span>
		</a>
		<a>
			<i>settings</i>
			<span>Settings</span>
		</a>
		<a>
			<i>group</i>
			<span>Users</span>
		</a>
		<a>
			<i>sync</i>
			<span>SFTP</span>
		</a>
		<a>
			<i>admin_panel_settings</i>
			<span>Admin</span>
		</a>
	</nav>
</div>

<div class="small-space"></div>

<Console serverId={data.serverId} on:websocket={handleWebhookReady} />
