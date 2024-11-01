<script lang="ts">
	let { children } = $props();
</script>

<nav class="tabbed small">
	<a class="active" href="/me">
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

<div class="small-space"></div>

{@render children()}
