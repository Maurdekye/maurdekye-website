<script>
	import portrait from '$lib/images/portrait.jpg';
	import profile from '$lib/images/profile.png';
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
		<h2 class="subtitle">(whichever you prefer)</h2>
		<h1 class="title">Welcome to my website</h1>
	</div>

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

	.rule {
		margin: 3em;
		border: none;
		width: 80vh;
		height: 1px;
		background-image: linear-gradient(
			to right,
			transparent,
			rgb(31, 31, 31) 25%,
			rgb(31, 31, 31) 75%,
			transparent
		);
	}

	.title-card {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.title {
		display: flex;
		align-items: center;
		font-size: 3em;
		margin: 0.1em;
	}

	.subtitle {
		font-size: 1.25em;
		margin: 1.5em;
	}
</style>
