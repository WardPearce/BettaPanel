<script lang="ts">
	import { goto } from '$app/navigation';

	let username: string;
	let password: string;

	let errorMessage: string = '';

	async function login(event: SubmitEvent) {
		event.preventDefault();

		const resp = await fetch(`${import.meta.env.VITE_DEFAULT_PUFFER_PANEL}/auth/login`, {
			method: 'POST',
			body: JSON.stringify({ username: username, password: password }),
			headers: {
				'Content-type': 'application/json'
			},
			credentials: 'include'
		});
		if (resp.ok) {
			goto('/me');
		} else {
			try {
				errorMessage = (await resp.json()).error.msg;
			} catch (error) {
				errorMessage = 'Puffer may be down';
			}
		}
	}
</script>

<nav class="middle-align center-align">
	<article class="surface">
		{#if errorMessage}
			<article class="error">{errorMessage}</article>
		{/if}

		<div class="small-space"></div>

		<form onsubmit={login}>
			<div class="field label prefix border">
				<i>person</i>
				<input required min={5} bind:value={username} type="text" />
				<label>Username</label>
			</div>

			<div class="field label prefix border">
				<i>password</i>
				<input required bind:value={password} type="password" />
				<label>Password</label>
			</div>

			<button type="submit">
				<span>Login</span>
				<i>login</i>
			</button>
		</form>
	</article>
</nav>

<style>
</style>
