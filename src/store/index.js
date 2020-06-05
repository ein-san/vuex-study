import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0,
      todos: [
        { id: 1, text: 'aiueo', done: true},
        { id: 2, text: 'kakikukeko', done: false},
      ]
    },
    getters: {
      // プロパティスタイルアクセス
      // プロパティとしてアクセスされるゲッターは Vue のリアクティブシステムの一部としてキャッシュされる
      doneTodos: state => {
        return state.todos.filter(state => state.done)
      },
      // ゲッターは第2引数として他のゲッターを受け取ります
      doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
      },
      // メソッドスタイルアクセス
      getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      incrementReceiveArg (state, n) {
        state.count += n
      },
      incrementReceiveObj (state, payload) {
        state.count += payload.amount
      }
    },
    // context.commit を呼び出すことでミューテーションをコミットできる。
    // context.state や context.getters で、状態やゲッターにアクセスできる。
    // 他のアクションも context.dispatch で呼ぶこともできる。
    actions: {
      // increment (context) {
      //   context.commit('increment')
      // },
      // console.log(context)の中身
      // {getters: {…}, state: {…}, rootGetters: {…}, dispatch: ƒ, commit: ƒ, …}
      // commit: ƒ boundCommit(type, payload, options)
      // dispatch: ƒ boundDispatch(type, payload)
      // getters: {}
      // rootGetters: {}
      // rootState: {__ob__: Observer}
      // state: {__ob__: Observer}
      // __proto__: Object
      increment ({ commit }) {
        commit('increment')
      },
      incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('increment')
        }, 3000)
      },
      // incrementAsyncReceiveObj (context, payload) {
      incrementAsyncReceiveObj ({ commit }, payload) {
        setTimeout(() => {
          commit('incrementReceiveObj', payload)
        }, 1000)
      },
      actionA ({ commit }) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('increment')
            resolve()
          }, 3000)  
        })
      },
      actionB ({ dispatch, commit }) {
        dispatch('actionA').then(() => {
          setTimeout(() => {
            commit('incrementReceiveObj', {amount: 5})
          }, 3000)
        })
      },
      // 最終的に async / await を使用することで、次のようにアクションを組み合わせることができる
      // async actionA ({ commit }) {
      //   commit('gotData', await getData())
      // },
      // async actionB ({ dispatch, commit }) {
      //   await dispatch('actionA') // `actionA` が完了するのを待機する
      //   commit('gotOtherData', await getOtherData())
      // }
    }
  })
  