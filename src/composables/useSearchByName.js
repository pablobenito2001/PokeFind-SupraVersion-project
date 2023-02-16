export function useSearchByName(elem, key){
    let final = [];
    if(!Array.isArray(elem) || key === ''){
        return elem
    }
    for (let i = 0; i < elem.length; i++) {
        if(elem[i].name.indexOf(key) !== -1) {
            if (elem[i].name[0] === key[0]) {
                final.push(elem[i])
                continue;
            }
        }else{
            continue;
        }
    }
    if (final.length === 0) {
        throw new Error('No se encontro Pokemon')
    }
    return final;
}