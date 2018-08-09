/*将要全局注册的组件引入*/
import Page from './Page'


const components = {
    Page,
}
export default {
    install(Vue){
        Object.keys(components).map(key=>{
            const cp = components[key]
            Vue.component(cp.name,cp)
        })
    }
}