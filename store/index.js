import Vuex from "vuex";
import { auth, GoogleProvider } from "../services/fireinit.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
    },
    actions: {
      signInWithGoogle() {
        return new Promise((resolve) => {
          auth.signInWithRedirect(GoogleProvider);
          resolve();
        });
      },

      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit("setUser", null);
          })
          .catch((err) => console.log(err));
      },
    },
  });
};

export default createStore;
