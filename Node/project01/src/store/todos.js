import VueCookies from 'vue-cookies'

export const todo = {

namespaced: true,
state() {
    return {
      todos: [
        {id:1, title:'할일 1', done: true},
        {id:2, title:'할일 2', done: false},
        {id:3, title:'할일 3', done: false},
      ],
      userInfo: {
        name : ' Kyu kim',
        email : '123@456.com'
      }
    }
  },

  getters: {
    todosCount(state) {
      return state.todos.length
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length
    },
    notDoneTodosCount(state) {
      return state.todos.filter((todo) => !todo.done).length
    },
    isLogin() {
      if (VueCookies.get('userInfo')){
        // state.loginUser= true
        return true
      } else {
        return false
        // state.loginUser= false
      }
    }
  },

  mutations: {
    add(state, item) {
      state.todos.push(item)
    },
    remove(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    doneYN(state, doneState) {
      state.todos.filter( (todo) => todo.id === doneState.id)[0].done = doneState.done
    },
    removeAll(state) {
      state.todos = []
    },

    setUserInfo(state) {
      console.log(state.userInfo)
      VueCookies.set('userInfo', state.userInfo, '10s')
    }
  },


  actions: {
    add({commit}, item) {
      commit('add', item)
    },

  }
 }
 
 