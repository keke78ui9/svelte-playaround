<svelte:options tag="my-app" />
<script lang="ts">
	import { onMount } from "svelte";
	import {} from './Localizer.svelte';

	export let local:string;
	
	let name:string;
	
	let localComponent;

	onMount(()=>{
		name = localComponent.getOne('name');
	});
</script>

<h1>Hello {name}!</h1>

<localizer-link data={local} bind:this={localComponent}></localizer-link>