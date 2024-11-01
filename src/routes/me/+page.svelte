<script lang="ts">
	import type { ServerSearchResults } from '$lib/api/models/ServerSearchResults';
	import ServerCard from '$lib/components/server/Card.svelte';

	let { data }: { data: { servers: ServerSearchResults } } = $props();
</script>

<div>
	<nav class="tabbed small">
		<a class="active">
			<i>dns</i>
			<span>Servers</span>
		</a>
		<a>
			<i>network_node</i>
			<span>Nodes</span>
		</a>
		<a>
			<i>group</i>
			<span>Users</span>
		</a>
		<a>
			<i>grid_view</i>
			<span>Templates</span>
		</a>
		<a>
			<i>settings</i>
			<span>Settings</span>
		</a>
	</nav>
</div>

<div class="small-space"></div>

{#each data.servers.servers || [] as server}
	<ServerCard {server} />
{/each}
