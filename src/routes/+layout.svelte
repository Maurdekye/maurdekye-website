<script>
	import './styles.css';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import discord from '$lib/images/discord.svg';
	import steam from '$lib/images/steam.svg';
	import youtube from '$lib/images/youtube.svg';
	import gmail from '$lib/images/gmail.svg';
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
		<a href="mailto:ncolaprete@gmail.com">
			<img class="header-icon mail" src={gmail} alt="mail" />
		</a>
		<a href="https://www.youtube.com/channel/UCt5-7m69vXXhd0w07GAuyOw">
			<img class="header-icon youtube" src={youtube} alt="youtube" />
		</a>
		<a href="https://discord.com/users/110958951029276672">
			<img class="header-icon discord" src={discord} alt="discord" />
		</a>
		<a href="https://steamcommunity.com/id/maurdekye">
			<img class="header-icon steam" src={steam} alt="steam" />
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
		padding: 0.25em;
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
