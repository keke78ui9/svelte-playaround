<svelte:options tag="my-app" />
<script lang="ts">
	import {} from './Link.svelte';
	export let name: string;

</script>

<main>
	<h1 data-testid="hello">Hello {name}!</h1>

	<p>Visit the 
		<app-link url="https://svelte.dev/tutorial" name="Svelte tutorial"></app-link> to learn how to build Svelte apps.
		
	</p>
</main>

<style type="text/scss">
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