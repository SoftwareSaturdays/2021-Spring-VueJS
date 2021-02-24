Vue.component('demo-component',{
    props: ['click'],
    template: `
        <div>
            <h3>This is a demo component</h3>
            <p>This text comes before</p>
            <slot></slot>
            <p>This text comes afterwards</p>
            <p>The inner button was clicked {{click}} times.</p>
        </div>
    `,
});

Vue.component('child-component',{
    template: `
        <div>
            <p>This text comes in the middle</p>
            <button v-on:click="send_event">Send event</button>
        </div>
    `,
    methods: {
        send_event: function() {
            this.$emit('press');
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        click_count: 0,
    },
    methods: {
        handle_press: function() {
            this.click_count++;
        }
    }
});