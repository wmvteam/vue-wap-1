//import axios from 'axios'
import button from './button'
import icon from './icon'
import row from './rk-row'
import col from './rk-col'
import input from './input'
import slider from './slider'
import list from './list'
import messagebox from './message-box'
import picker from './picker'
import datetimePicker from './datetime-picker'
import tabcon from './tab-con'
import tabconitem from './tab-con-item'
import tabitem from './tab-item'
import tabbar from './tab-bar'
import navbar from './nav-bar'
import loadmore from './loadmore'
import cell from './cell'
import field from './field'
import actsheet from './actsheet'
import box from './checkbox'

const components = [
    button,
    icon,
    row,
    col,
    input,
    slider,
    list,
    picker,
    datetimePicker,
    tabcon,
    tabconitem,
    tabitem,
    tabbar,
    navbar,
    loadmore,
    cell,
    field,
    actsheet,
    box
]
const install = function(Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    })
    Vue.$messagebox = Vue.prototype.$messagebox = messagebox;
    //Vue.$http = Vue.prototype.$http = axios;
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

const plugin = {
    install
}

export default plugin
