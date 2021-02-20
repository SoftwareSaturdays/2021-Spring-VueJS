const app = new Vue({
    el: '#app',
    data: {
        message: "Testing some other v- directives:",
        toggle: true,
    },
    methods: {
        set_toggle: function() {
            this.toggle = !this.toggle;
        }
    },
    computed: {
        otherToggle: function() {
            return !this.toggle;
        }
    }
});
