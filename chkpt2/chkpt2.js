// Load the database first
const firebaseConfig = {
    /* Paste your config here */
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

Vue.component('database', {
    props: ['title', 'data'],
    template: `
        <div class="data-entry">
            <p>{{title}}:</p>
            <!-- We haven't covered this syntax, but it is exactly like a regular v-for but for objects -->
            <ul>
                <li v-for="(value, name) in data" v-bind:key="name">{{name}} : {{value}}</li>
            </ul>
        </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        data_list: [],
    },
    created: function() {
        database.ref('/').once('value').then((snap) => {
            for(let key in snap.val()) {
                this.data_list.push({title:key, data:snap.val()[key]});
            }
        });
    },
});