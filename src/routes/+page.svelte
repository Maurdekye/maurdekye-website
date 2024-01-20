<script>
	import TitleCard from './TitleCard.svelte';
	import Articles from './Articles.svelte';
	import WorkExperience from './WorkExperience.svelte';
	import ToolExperience from './ToolExperience.svelte';
	import PersonalProjects from './PersonalProjects.svelte';
</script>

<svelte:head>
	<title>Maurdekye.com</title>
	<meta name="description" content="I'm Maurdekye; this is my website" />
</svelte:head>

<section>
	<TitleCard />

	<hr class="rule" />

	<Articles />

	<div class="experience">
		<WorkExperience />
		<div class="vrule experience-separator"></div>
		<ToolExperience />
	</div>

	<hr class="rule" />

	<PersonalProjects />

	<hr class="rule" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.experience-separator {
		align-self: center;
	}

	.experience {
		display: flex;
		flex-flow: row;
	}

	@media (max-width: 1000px) {
		.experience {
			flex-flow: column;
		}

		.experience-separator {
			display: none;
		}
	}
</style>
