export function useUnwrapData(elem){
    return Promise.all(elem.map(async elem => {
        let j = await(await fetch(elem.url)).json();
        return {
            _name: j.name,
            _types: j.types.map(elem => elem.type.name),
            _id: j.id,
            _image: j.sprites.front_default,
            _stats: j.stats
        }
    }))
}
