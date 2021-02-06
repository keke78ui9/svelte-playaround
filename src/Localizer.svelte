<svelte:options tag="localizer-link" />
<script lang="ts">
    // export let data:string;
    // console.info('local data', data);

    // export function getAll(){
	// 	return 'test'
	// }	

    // export function getOne(key:string){
    //     var localData = JSON.parse(data);
	// 	return localData[key];
	// }

    import { dictionary, locale, _ } from 'svelte-i18n';

    function setI18n({ local: _locale } = { local: 'en' }) {
        
        dictionary.set({
            'en': {
                name: 'name'
            },
            'ja': {
                name: '名前'
            },
            'fr-FR': {
                name: 'Nom'
            },
            'zh-CN': {
                name: '名称'
            },

        });
                locale.set(_locale);
    }

    // load global script 
    // set locale
    setI18n({local: 'zh-CN'})
</script>