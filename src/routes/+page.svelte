<script>
	import portrait from '$lib/images/portrait.jpg';
	import profile from '$lib/images/profile.png';
	import WorkExperience from './WorkExperience.svelte';
	import ToolExperience from './ToolExperience.svelte';
	import PersonalProjects from './PersonalProjects.svelte';
</script>

<svelte:head>
	<title>Maurdekye.com</title>
	<meta name="description" content="I'm Maurdekye; this is my website" />
</svelte:head>

<section>
	<div class="profile-pictures">
		<img class="profile-picture" src={portrait} alt="Nicholas Alexander Colaprete" />
		<div class="separator">/</div>
		<img class="profile-picture" src={profile} alt="Maurdekye" />
	</div>

	<hr class="rule" />

	<div class="title-card">
		<h1 class="title">
			I'm <img class="profile-icon" src={portrait} alt="Nicholas Alexander Colaprete" />
			<span class="bolded">Nicholas Alexander Colaprete</span>
		</h1>
		<h1 class="title">
			or <img class="profile-icon" src={profile} alt="Maurdekye" />
			<span class="bolded">Maurdekye</span>
		</h1>
		<h2 class="anecdote">(whichever you prefer)</h2>
		<h1 class="subtitle">I'm a Software Developer based out of Philadelphia, PA; welcome to my website</h1>
		<h2 class="anecdote">(Sorry that it's kind of empty... i'm still working on it)</h2>
	</div>

	<hr class="rule" />

	<div class="experience">
		<WorkExperience />
		<div class="vrule experience-separator-landscape"></div>
		<div class="rule experience-separator-portrait"></div>
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

	.profile-pictures {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.profile-icon {
		width: 0.75em;
		height: 0.75em;
		border-radius: 50%;
		border: 0.1em solid var(--color-bg-2);
		box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
		margin: 0.15em;
	}

	.bolded {
		font-weight: 600;
	}

	.separator {
		display: block;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 10em;
		justify-content: center;
	}

	.profile-picture {
		display: block;
		border-radius: 50%;
		border: 0.5em solid var(--color-bg-2);
		max-width: 12em;
		max-height: 12em;
		margin: 0.5em;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
	}

	.title-card {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 70%
	}

	.title {
		display: flex;
		align-items: center;
		font-size: 3em;
		margin: 0.1em;
	}

	.anecdote {
		font-size: 1.25em;
		margin: 1.5em;
	}

	.spacer {
		min-height: 5em;
	}

	.experience {
		display: flex;
		flex-flow: row;
		width: 90%;
	}

	.experience-separator-portrait {
		display: none;
	}

	@media only screen and (max-width: 1000px) {
		.experience {
			flex-direction: column;
		}

		.experience-separator-landscape {
			display: none;
		}

		.experience-separator-portrait {
			display: block;
		}

	}
</style>
