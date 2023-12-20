<script>
	import './styles.css';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<div class="app">
	<header>
		<div class="spacer"></div>
		<a href="https://github.com/Maurdekye">
			<img class="header-icon github" src={github} alt="github" />
		</a>
		<a href="https://www.linkedin.com/in/nicholas-colaprete-630983115/">
			<img class="header-icon linkedin" src={linkedin} alt="linkedin" />
		</a>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>

	header {
		display: flex;
		margin: 0.5em;
	}

	.spacer {
		flex: 1;
	}

	.header-icon {
		display: block;
		width: 3em;
		height: 3em;
		background-color: #f6f3ff;
		border-radius: 10%;
		margin: 0.25em;
	}

	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
