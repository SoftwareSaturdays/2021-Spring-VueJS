// TIP: You can use a back-tick (`) to make a multiline string in JavaScript
//      The back-tick is the key above Tab and left of 1

Vue.component('basic-component',{
    template: `
        <div>
            <h3>This is a basic component</h3>
            <p>It has no props, no data, and no functionality</p>
        </div>
    `
});

// TIP: Props should be all lower-case, some browsers do not support upper-case HTML

Vue.component('prop-component', {
    props: ['text', 'anotherprop'],
    template: `
        <div>
            <h3>This is a prop-based component</h3>
            <p>It has some props, but no data and no functionality</p>
            <p>The {{text}} jumped over the {{anotherprop}}.</p>
        </div>
    `
});

// TIP: Replace data with the definition below to see why component data must be a function
/*
data: {
    click: 0,
}
*/

Vue.component('data-component', {
    props: ['text'],
    template: `
        <div>
            <h3>This is a prop-based component</h3>
            <p>It has some props and some data</p>
            <button v-on:click="onClick">The {{text}} has been clicked {{click}} times.</button>
        </div>
    `,
    data: function() {
        return {
            click: 0
        }
    },
    methods: {
        onClick: function() {
            this.click++;
        }
    },
})

const app = new Vue({
    el: '#app',
    data: {
        fox: "quick brown fox",
        dog: "lazy dog",
        button: "button"
    },
});