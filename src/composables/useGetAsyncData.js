import { ref } from 'vue';

export function useGetAsyncData(URL){
    const result = ref(null);
    const error = ref(null);

    async function request(){
        const data = await fetch(URL);
        result.value = await data.json();
    }

}