<script>
	import portrait from '$lib/images/portrait.jpg';
	import profile from '$lib/images/profile.png';
</script>

<section>
	<div class="profile-pictures">
		<img class="profile-picture" src={portrait} alt="Nicholas Alexander Colaprete" />
		<div class="separator">/</div>
		<img class="profile-picture" src={profile} alt="Maurdekye" />
	</div>

	<hr class="rule" />

	<div class="title-card">
		<h1 class="title text icon-context">
			I'm <img class="profile-icon" src={portrait} alt="Nicholas Alexander Colaprete" />
			<span class="bolded">Nicholas Alexander Colaprete</span>
		</h1>
		<h1 class="title text icon-context">
			or <img class="profile-icon" src={profile} alt="Maurdekye" />
			<span class="bolded">Maurdekye</span>
		</h1>
		<h2 class="anecdote text">(whichever you prefer)</h2>
		<h1 class="subtitle text">I'm a Software Developer based out of Philadelphia, PA; welcome to my website</h1>
		<h2 class="anecdote text">(Sorry that it's kind of empty... i'm still working on it)</h2>
	</div>
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
		justify-content: center;
	}

	.separator {
		display: block;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: min(10em, 27vw);
		justify-content: center;
	}

	.profile-picture {
		display: block;
		border-radius: 50%;
		border: min(0.5em, 1.5vw) solid var(--color-bg-2);
		width: min(12em, 32vw);
		height: min(12em, 32vw);
		margin: min(0.5em, 1.5vw);
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
	}

    .profile-icon {
        width: min(0.75em, 5vw);
        height: min(0.75em, 5vw);
        border-radius: 50%;
        border: min(0.1em, 1vw) solid var(--color-bg-2);
        box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
        margin: min(0.1em, 1vw);
    }

    .bolded {
        font-weight: 600;
    }

	.title-card {
		display: flex;
		flex-flow: column;
		align-items: center;
        max-width: 90%;
	}

    .icon-context {
		display: flex;
		align-items: center;
    }

	.title, .subtitle {
        font-size: min(3em, 5vw);
        margin: 0 0.15em;
	}

	.anecdote {
        font-size: min(1.25em, 3.5vw);
	}
</style>