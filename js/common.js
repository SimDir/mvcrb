/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//alert('lol');

var store = new Vuex.Store({
    state: {
        content: '',
        MainMenu: {},
        User: {}
    },
    mutations: {
        content(state, n) {
//            console.log('n c s',state);
            state.content = n;
        },
        User(state, n) {
//            console.log('store sn',n);
            state.User = n;
        },
        MainMenu(state, n) {
//            console.log('store sn',n);
            state.MainMenu = n;
        }

    }
});