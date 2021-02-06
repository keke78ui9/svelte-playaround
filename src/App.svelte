<svelte:options tag="my-app" />
<script lang="ts">
	import { onMount } from "svelte";
	import {} from './Localizer.svelte';
	import { _ } from 'svelte-i18n';
	
	let name:string;
	
	// let localComponent;

	// onMount(()=>{
	// 	name = localComponent.getOne('name');
	// });

	onMount(() => {
		name = $_('name');
	})

	{@debug name}
	
</script>

<h1>Hello {name}!</h1>
<!-- <h2>{$_('app.yes')}</h2> -->

<!-- <localizer-link data={local} bind:this={localComponent}></localizer-link> -->
<localizer-link></localizer-link>