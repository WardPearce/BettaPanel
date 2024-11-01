<script lang="ts">
	import { puffer } from '$lib/const';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let props: { serverId: string } = $props();

	const dispatch = createEventDispatcher();

	let serverLogs: string = $state('');
	onMount(async () => {
		serverLogs = atob(`${(await puffer.default.getApiServersConsole(props.serverId, 0)).logs}`);
		scrollIntoView();
	});

	async function scrollIntoView() {
		await tick();
		const consoleElement = document.getElementById('console');
		if (consoleElement) consoleElement.scrollTop = consoleElement.scrollHeight;
	}

	function websocket(data: Record<string, any>) {
		serverLogs += atob(data.logs);
		scrollIntoView();
	}

	dispatch('websocket', websocket);
</script>

<article>
	<article id="console" class="surface-dim large" style="overflow: scroll;white-space: pre-line;">
		{serverLogs}
	</article>
	<nav>
		<div class="field label border max">
			<input type="text" />
			<label>Command</label>
		</div>
		<button>
			<i>send</i>
		</button>
	</nav>
</article>
