import { ref } from "vue"
import API from "../services/API";
import type { Ref } from "vue";

export const useGetLocalData = <T>(end: string) => {
    const DataLocal = ref<T | null>(null) as Ref<T>;
    const ErrorLocal = ref<Error | null | string>(null);

    (async () => {
        try{
            DataLocal.value = await API.fetchingLocal<T>(end);
        }catch(e){
            console.error(e);
            if (typeof e === "string") {
                ErrorLocal.value = e.toUpperCase();
            } else if (e instanceof Error) {
                ErrorLocal.value = e
            }
        }
    })()

    return {
        DataLocal,
        ErrorLocal
    }
}