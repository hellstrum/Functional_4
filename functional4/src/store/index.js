import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';

//using vuex-persist to keep store persistant
// https://alligator.io/vuejs/vuex-persist-state/

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist ({
  key: 'vuex',
  storage: window.localStorage

})

export default new Vuex.Store({

    plugins: [vuexLocalStorage.plugin],

  state: {
    internships: [
      {
        id:1,
        title: "Multimedia Coordinator",
        majors: ["Advertising", "Broadcasting", "Communication Technology"],
        location: "Dallas",
        isFavorite: false,
        comments:[],
        views:0
      },
      {
        id:2,
        title: "Copywriter",
        majors: ["Advertising"],
        location: "Fort Worth",
        isFavorite: false,
        comments:[],
        views:0
      },
      {
        id:3,
        title: "Production Assistant",
        majors: ["Broadcasting"],
        location: "Arlington",
        isFavorite: true,
        comments:[],
        views:0
      }
    ]
  },



  mutations: {
    SET_FAVORITE(state, payload)
    {
      state.internships[payload.id-1].isFavorite = payload.isFavorite;

      //attempt at local storage
      // localStorage.state.internships[payload.id-1].isFavorite = JSON.stringify(state.internships[payload.id-1].isFavorite);

      //alert(state.internships[payload.id-1].isFavorite);
    },

    SHOW_INFO(state, payload){

      state.internships[payload.id-1].views = payload.views;
      /*
      Pretty much the same as SET_FAVORITES

      Note that payload.views was incremented by 1 in the action showInfo.
      */
    },

    SUBMIT_COMMENT(state, payload)
    {
      const objComment = state.internships.find(internship => internship.id === payload.currentInternship);
      //alert( Array.isArray(objInternship.comments) );
      objComment.comments.push(payload);

      //attempt at local storage
      // localStorage.state.internships[payload.id-1].comments = JSON.stringify(state.internships[payload.id-1].comments);

    }
  },

  actions: {

    setFavorite(context, payload)
    {
      if(payload.isFavorite !== true)
      {
          payload.isFavorite = true;
          context.commit('SET_FAVORITE', payload);
      } else {
        payload.isFavorite = false;
        context.commit('SET_FAVORITE', payload);
      }

      //alert('context: ' + context + ',payload:' + payload);
    },

    showInfo(context, payload)
    {
      payload.views++;
      context.commit("SHOW_INFO", payload);
    },

    submitComment(context, payload)
    {
      context.commit("SUBMIT_COMMENT", payload);
    }

  },

  getters: {
    internshipItemCount: state => state.internships.length,
    //go to state, go to internships property, and get the length

    allInternships: state => state.internships
  }
});
