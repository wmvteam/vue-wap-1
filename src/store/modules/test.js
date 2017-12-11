import axios from 'axios'
import {
    API_GET_TEST,
} from '../actionType/test'

import {
    GET_TEST_API
} from '../../constants/test'

const state = {
  TestData:null,
}

const getters = {
    weeksActs: function (state) {
        return state.TestData&&state.TestData
    }
}

const actions = {
    async get_test({ commit, state }, query){
        let r = await axios.get(GET_TEST_API,{params:query})
       commit('API_GET_TEST',r)
   }
}

const mutations = {
  [API_GET_TEST] (state,data) {
      state.TestData = data

  }
}

export default {
    state,
    actions,
    getters,
    mutations
}
