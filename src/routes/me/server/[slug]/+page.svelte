<script>
	import Console from '$lib/components/server/Console.svelte';
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

<Console />
