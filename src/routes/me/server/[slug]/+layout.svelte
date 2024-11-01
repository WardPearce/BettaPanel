<script lang="ts">
	import type { GetServer } from '$lib/api';

	let { children, data }: { children: any; data: { server: GetServer } } = $props();
</script>

<nav>
	<h5 class="max">{data.server.server?.name}</h5>
	<button><i>play_arrow</i></button>
</nav>

<nav style="margin-bottom: 0;" class="tabbed small">
	<a class="active" href={`/me/server/${data.server.server?.id}`}>
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

<div class="small-space"></div>

{@render children()}
