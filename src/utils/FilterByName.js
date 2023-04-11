export const FilterByName = (elem, keyName) => {
    const final = [];
    if (keyName !== '') {
        for (let i = 0; i < elem.length; i++) {
            if(elem[i]._name.indexOf(keyName) !== -1) {
                if (elem[i]._name[0] === keyName[0]) {
                    final.push(elem[i])
                    continue;
                }
            }else{
                continue;
            }
        }
        return final;
    }
    return elem;
}