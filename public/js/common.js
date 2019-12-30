if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        console.log('log IDLE');
//        Fingerprint2.get(function (components) {
//          console.log(components) // an array of components: {key: ..., value: ...}
//        })
    })
} 
var mvcrbstore = new Vuex.Store({
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