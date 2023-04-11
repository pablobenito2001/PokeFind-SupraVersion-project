export const FilterByType = (elem, keyType) => {
    if(keyType !== 'all'){
        return elem.filter((fil) =>  fil._types.some((some) => some === keyType))
    }else{
        return elem;
    }
}