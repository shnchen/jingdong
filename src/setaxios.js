import axios from 'axios';
import store from './store';
import router from './router';
const setAxios = ()=>{
     axios.interceptors.request.use(
        config =>{
            if(store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }
    )
    axios.interceptors.response.use(
        response => {
            if(response.status ===200){
                const data = response.data;
                if(data.status === -1){
                    store.commit('setToken',''),
                    window.localStorage.removeItem('token');
                    router.replace({path:'/'});
                }
                return data;
            }
            return response;
        }
    )
}
export default setAxios;