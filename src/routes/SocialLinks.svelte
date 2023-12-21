<script>
	import './styles.css';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import discord from '$lib/images/discord.svg';
	import stack_exchange from '$lib/images/stack-exchange.svg';
	import steam from '$lib/images/steam.svg';
	import youtube from '$lib/images/youtube.svg';
	import gmail from '$lib/images/gmail.svg';
</script>

<section>
    <div class="left-spacer spacer"></div>
    <a class="icon-link" href="https://github.com/Maurdekye">
        <img class="header-icon github" src={github} alt="github" />
    </a>
    <a class="icon-link" href="https://www.linkedin.com/in/nicholas-colaprete-630983115/">
        <img class="header-icon linkedin" src={linkedin} alt="linkedin" />
    </a>
    <a class="icon-link" href="https://stackexchange.com/users/2755435/maurdekye">
        <img class="header-icon stack-exchange" src={stack_exchange} alt="stack-exchange" />
    </a>
    <a class="icon-link" href="mailto:ncolaprete@gmail.com">
        <img class="header-icon mail" src={gmail} alt="mail" />
    </a>
    <a class="icon-link" href="https://www.youtube.com/channel/UCt5-7m69vXXhd0w07GAuyOw">
        <img class="header-icon youtube" src={youtube} alt="youtube" />
    </a>
    <a class="icon-link" href="https://discord.com/users/110958951029276672">
        <img class="header-icon discord" src={discord} alt="discord" />
    </a>
    <a class="icon-link" href="https://steamcommunity.com/id/maurdekye">
        <img class="header-icon steam" src={steam} alt="steam" />
    </a>
    <div class="right-spacer spacer"></div>
</section>

<style>
	section {
		display: flex;
		margin: 0.5em;
	}

    .right-spacer {
        display: none;
    }

	.spacer {
		flex: 1;
	}

	.header-icon {
		display: block;
		width: min(3em, 9vw);
		height: min(3em, 9vw);
		background-color: #f6f3ff;
		border-radius: 10%;
        margin: min(0.25em, 1vw);
        padding: min(0.25em, 1vw);
	}

    @media (max-width: 500px) {
        .right-spacer {
            display: block;
        }
    }
</style>