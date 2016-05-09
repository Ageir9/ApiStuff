/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";
Vue.config.debug = true;

//Router
//Býr til router http://router.vuejs.org/en/installation.html
//Brýtur allt í leiðinni
var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);


var Top = Vue.extend({
    template: '<p>Go to bottom</p>'
}),
    Bottom = Vue.extend({
        template: '<p>Go to top</p>'
    });

var App = Vue.extend({}),
    router = new VueRouter({});
//where to go
router.map({
    '/top': {
        component: Top
    },
    '/bottom': {
        component: Bottom
    }
});
//initialize router
router.start(App, '#app');

new Vue({
    el: '#app',
    data: {
        loading : true,
        output: {}
    },
    attached: function () {
        //Þetta virkar einhvernveginn
        var $this = this;
        
        //https://zkillboard.com/api/alliance/99006112/
        //js/chardata.json
        $.getJSON("https://zkillboard.com/api/character/94406674/", function (killData) {
            killData.forEach(function (data) {
                var strippedData = data;
            });
            
            $this.$data.output = killData;
            console.log($this.output);
            $this.loading = false;
        });
        
    }
});
