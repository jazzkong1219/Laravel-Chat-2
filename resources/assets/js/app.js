
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-application', require('./components/ChatApplication.vue'))

const app = new Vue({
    el: '#app',
    data: {
        userID: null
      },
      mounted () {
        // Assign the ID from meta tag for future use in application
        this.userID = document.head.querySelector('meta[name="userID"]').content
      }
});
