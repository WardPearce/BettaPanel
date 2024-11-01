<script lang="ts">
	import type { GetServer, ServerRunning } from '$lib/api';
	import { puffer } from '$lib/const';

	let { children, data }: { children: any; data: { server: GetServer; status: ServerRunning } } =
		$props();

	let serverStatus = $state(data.status.running);

	async function togglePowerAction() {
		if (serverStatus) {
			await puffer.default.postApiServersStop(data.server.server?.id as string);
			serverStatus = false;
		} else {
			await puffer.default.postApiServersStart(data.server.server?.id as string);
			serverStatus = true;
		}
	}
</script>

<nav>
	<h5 class="max">{data.server.server?.name}</h5>
	<button onclick={togglePowerAction}>
		<i>
			{#if serverStatus}
				close
			{:else}
				play_arrow
			{/if}
		</i>
	</button>
</nav>

<nav style="margin-bottom: 0;" class="tabbed small">
	<a class="active" href={`/me/server/${data.server.server?.id}`}>
		<i>terminal</i>
		<span>Console</span>
	</a>
	<a href={`/me/server/${data.server.server?.id}/stats`}>
		<i>analytics</i>
		<span>Statistics</span>
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

<div class="small-space"></div>

{@render children()}
