// Load the database first
const firebaseConfig = {
    /* Paste your config here */
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

// A basic Vue component
Vue.component('name', {
    /* TODO fill out the component here... */
});

// The Vue instance
const app = new Vue({
    el: '#app',
    data: {

    },
    created: function() {
        // TODO fill out the Vue instance here... 
    }
});
