import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        nickname: 'player 1'
      },
      {
        nickname: 'player 2'
      },
      {
        nickname: 'player 3'
      },
      {
        nickname: 'player 4'
      },
      {
        nickname: 'player 5'
      }
    ],
    roles_master: [
      {
        name: 'マーリン',
        team: 'アーサー王陣営',
        watchByMarlin: false,
        watchByMordred: false,
        watchByPercival: true
      },
      {
        name: 'パーシヴァル',
        team: 'アーサー王陣営',
        watchByMarlin: false,
        watchByMordred: false,
        watchByPercival: false
      },
      {
        name: 'アーサー王の臣下',
        team: 'アーサー王陣営',
        watchByMarlin: false,
        watchByMordred: false,
        watchByPercival: false
      },
      {
        name: '暗殺者',
        team: 'モードレッド陣営',
        watchByMarlin: true,
        watchByMordred: true,
        watchByPercival: false
      },
      {
        name: 'モードレッドのしもべ',
        team: 'モードレッド陣営',
        watchByMarlin: true,
        watchByMordred: true,
        watchByPercival: false
      }
    ]
  },
  mutations: {
    addPlayer (state) {
      state.players.push({
        nickname: ''
      })
    },
    editPlayer (state, payload) {
      state.players.splice(payload.index, 1, payload.player)
    },
    deletePlayer (state, payload) {
      state.players.splice(payload.index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
