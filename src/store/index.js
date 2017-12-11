import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import common from './common'
import test from './modules/test'

Vue.use(Vuex)

const store = new Vuex.Store(Object.assign({}, {
    ...common,
    modules: {
        test
    },
    strict: process.env.NODE_ENV !== 'production'
}, process.env.NODE_ENV === 'production' ? {} : {
   plugins: [createLogger()]
}))

export default store
