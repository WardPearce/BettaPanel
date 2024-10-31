<script lang="ts">
	import '@appwrite.io/pink';
	import '@appwrite.io/pink-icons';
</script>

<div class="grid-with-side">
	<header class="main-header u-padding-inline-end-0">
		<a href="/" class="button is-text"><h1>BettaPanel</h1></a>

		<div class="main-header-end u-margin-inline-end-16">
			<ul class="buttons-list is-with-padding">
				<li class="buttons-list-item is-not-mobile u-padding-inline-0">
					<a
						href="https://github.com/WardPearce/BettaPanel"
						title="GitHub"
						target="_blank"
						rel="noopener noreferrer"
						class="button is-text"
					>
						<span class="icon-github" aria-hidden="true"></span>
						Github
					</a>
				</li>
				<li class="buttons-list-item u-padding-inline-0">
					<div>
						<button class="button is-only-icon is-text" aria-label="Replace to Light Mode Theme">
							<span class="icon-moon" aria-hidden="true"></span>
						</button>
					</div>
				</li>
			</ul>
		</div>
	</header>

	<aside class="main-side">
		<div class="side-nav">
			<div class="side-nav-level-1">
				<div class="side-nav-main">
					<section class="drop-section">
						<ul class="drop-list">
							<li class="drop-list-item">
								<a class="drop-button is-selected" href="">
									<span class="icon-home" aria-hidden="true"></span>
									<span class="text">Menu item</span>
								</a>
							</li>
							<li class="drop-list-item">
								<a class="drop-button" href="">
									<span class="icon-user-group" aria-hidden="true"></span>
									<span class="text">Menu item</span>
								</a>
							</li>
							<li class="drop-list-item">
								<a class="drop-button" href="">
									<span class="icon-bell" aria-hidden="true"></span>
									<span class="text">Menu item</span>
								</a>
							</li>
							<li class="drop-list-item">
								<a class="drop-button" href="">
									<span class="icon-chart-pie" aria-hidden="true"></span>
									<span class="text">Menu item</span>
								</a>
							</li>
							<li class="drop-list-item">
								<a class="drop-button" href="">
									<span class="icon-document" aria-hidden="true"></span>
									<span class="text">Menu item</span>
								</a>
							</li>
						</ul>
					</section>
				</div>
				<div class="side-nav-bottom">
					<section class="drop-section">
						<a class="drop-button" href="">
							<span class="icon-cog" aria-hidden="true"></span>
							<span class="text">Menu item</span>
						</a>
					</section>
				</div>
			</div>
		</div>
	</aside>

	<main class="main-content container">
		<slot />
	</main>
</div>
