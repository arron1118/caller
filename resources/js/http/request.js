import axios from 'axios'
function post(url,par){
    return new Promise(((resolve, reject) => {
        axios.post(route(url), par).then(res => {
            resolve(res.data)
        }).catch(err =>{
            reject(err.data)
        })
    }))
}
export { post }
