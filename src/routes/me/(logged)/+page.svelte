<script lang="ts">
	import type { ServerSearchResults } from '$lib/api/models/ServerSearchResults';
	import ServerCard from '$lib/components/server/Card.svelte';

	let { data }: { data: { servers: ServerSearchResults } } = $props();
</script>

{#each data.servers.servers || [] as server}
	<ServerCard {server} />
{/each}
