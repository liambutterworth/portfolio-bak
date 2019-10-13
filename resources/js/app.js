import Vue from 'vue';
import App from './components/App';
import Router from './router';

export default new Vue({
    el: '#app',
    router: Router,
    render: h => h(App),
});
