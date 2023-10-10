import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : '858a1bec1dbf4fb6b0224dea331206db'
    }
})