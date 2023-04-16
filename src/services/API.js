import axios from "axios";

export default(url = 'https://pokeapi.co/api/v2/pokemon') => {
    return axios.create({
        baseURL: url,
    })
}