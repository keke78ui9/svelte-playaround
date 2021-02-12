<svelte:options tag="app-link" />
<script lang="ts">
    export let url: string;
    export let name: string;
    export let target: string;

    if (!target) {
        target = '_blank';
    }

</script>


{#if name && url}
<a href={url} target={target}>{name}</a>
{/if}

<style type="text/scss">
</style>