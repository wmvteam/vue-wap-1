/**
 * Created by root on 2017/7/12.
 */
import axios from 'axios'
import { API_FALID } from '../store/actionType'
import store from '../store'
//import {router} from '../router'
import Toast from '../components/toast'
axios.interceptors.request.use(
    config => {
        Toast.show()
        return config;
    }, (error) => {
        Toast.hide()
        console.error(' request error', error, error && error.request)
        return Promise.reject(error)
    })

axios.interceptors.response.use((response) => {
    console.log(response)
    Toast.hide()
    if (response.data.code == 0 ) {
        return Promise.resolve(response.data.data)
    }
    else if(response.data.code == 1001){
        return Promise.resolve(response.data.data)
    }
    else if (response.data.code == 1024) { // token expired
        window.location.href = '?cmd=login'
        return
    } else {
        store.commit(API_FALID, { data: response.data.msg })
        return
    }
}, (error) => {
    Toast.hide()
    console.error(' response error', error, error && error.response)
    store.commit(API_FALID, { data:'网络错误' })
    return Promise.reject(error)
})

function plugin(Vue) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.http = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return axios
      }
    },
    $http: {
      get () {
        return axios
      }
    }
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
export default plugin
