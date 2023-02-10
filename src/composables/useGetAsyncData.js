import { ref } from 'vue';

export function useGetAsyncData(URL){
    const result = ref([]);
    const error = ref(null);

    const filters = ref({
        name: null,
        type: null,
        region: null
    });

    (async function request(){
        try{
            let data = await (await fetch(URL)).json();
            result.value = data.results;
        }catch(e){  
            console.log(e, e.status)
            error.value = e;
        }
    })();

    return {
        data: result,
        error: error
    };
}