import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers['content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Access-control-Allow-Orign'] = '*'

export default {
    methods: {
        async $get(url){
            return await axios.get(url).catch( (e) => {
                console.log(e)
            }).data
        },
        async $post(url, data) {
            return await axios.post(url, data).catch((e) =>{
                console.log(e)
            })
        },
        async $delete(url) {
            return await axios.post(url, data).catch((e) =>{
                console.log(e)
            })
        }
    }
}