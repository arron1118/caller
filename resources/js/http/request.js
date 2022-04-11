import axios from 'axios'
import {ref} from 'vue'
const params = ref({
    page: 1,
    limit: 15,
})
function post(url){
    console.log('这')
    return new Promise(((resolve, reject) => {
        axios.post(route(url), params.value).then(res => {
            resolve(res.data)
        }).catch(err =>{
            reject(err.data)
        })
    }))
}
export { post }
