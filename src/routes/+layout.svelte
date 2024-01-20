<script>
	import SocialLinks from './SocialLinks.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Maurdekye.com</title>
	<meta name="description" content="I'm Maurdekye; this is my website" />
</svelte:head>

<div class="app">
	<SocialLinks />
	<main>
		<slot />
	</main>
</div>

<style>

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
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
