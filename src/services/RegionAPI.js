import API from "./API";

export default {
    getRegion(region = '?offset=0&limit=151') {
        return API().get(region);
    }
}