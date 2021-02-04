<svelte:options tag="localizer-link" />
<script lang="ts">
    export let data:string;
    console.info('local data', data);

    export function getAll(){
		return 'test'
	}	

    export function getOne(key:string){
        var localData = JSON.parse(data);
		return localData[key];
	}
</script>