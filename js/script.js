/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";
Vue.config.debug = true;
//Router
var Top = Vue.extend({
    template: '<p>Go to bottom</p>'
});

var Bottom = Vue.extend({
    template: '<p>Go to top</p>'
});

//var Vue = require('vue');
//var VueRouter = require('vue-router');
Vue.use(VueRouter);


new Vue({
    el: '#nuggets',
    data: {
        loading : true,
        output: {}
    },
    attached: function () {
        var $this = this;
        //https://zkillboard.com/api/alliance/99006112/
        //https://zkillboard.com/api/character/94406674/
        $.getJSON("js/chardata.json", function (killData) {
            killData.forEach(function (data) {
                var strippedData = data;
            });
            
            $this.$data.output = killData;
            console.log($this.output);
            $this.loading = false;
        });
        
    }
});
