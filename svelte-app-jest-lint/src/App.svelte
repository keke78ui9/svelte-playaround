<svelte:options tag='my-app'></svelte:options>
<script lang="ts">
	export let name: string;
	var test = '';
	// rollup-disable-warning-next-line EVAL
	// eval('test = 1;');
	console.info(test);

	eval('test');
	var id = 1;

</script>

<main>
	<h1 data-testid="name">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style type="text/scss">

	.un-used-style {
		font-size: 3rem;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	
		h1 {
			color: green;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
