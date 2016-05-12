/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";
Vue.config.debug = true;

<<<<<<< HEAD
//Býr til router
//http://router.vuejs.org/en/installation.html
//Brýtur allt í leiðinni
/*
=======
//Router
//Býr til router http://router.vuejs.org/en/installation.html
//Brýtur allt í leiðinni
>>>>>>> origin/master
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
<<<<<<< HEAD
*/
=======

>>>>>>> origin/master
new Vue({
    el: '#app',
    data: {
        loading : true,
        output: {}
    },
    attached: function () {
        //Þetta virkar einhvernveginn
        var $this = this;
<<<<<<< HEAD
        var shipdata;
        
        //js/chardata.json
        //https://zkillboard.com/api/character/94406674/
        $.getJSON("https://zkillboard.com/api/alliance/99006112/", function (killData) {

            $.getJSON("js/shipdump.json", function (ships) {
                shipdata = ships;
                killData.forEach(function (element, index, array) {
                    //console.log(element);

                    if (element.attackers.characterName == ""  || element.attackers.corporationName == "CONCORD")
                    {
                        element.attackers[0].characterName == "CONCORD Officer";
                    }
                    else
                    {
                        element.attackers[0].characterName == "Unknown";
                    }
                    shipdata.forEach(function (shipElement, shipIndex, shipArray) {
                        if (shipElement.typeId === element.victim.shipTypeID) {
                            element.victim.shipTypeID = shipElement.typeName;
                            return;
                        }
                    });
                });
                
=======
        
        //https://zkillboard.com/api/alliance/99006112/
        //js/chardata.json
        $.getJSON("https://zkillboard.com/api/character/94406674/", function (killData) {
            killData.forEach(function (data) {
                var strippedData = data;
>>>>>>> origin/master
            });
            console.log(killData[1]);
            
            $this.$data.output = killData;
            console.log($this.output);
            //loading fyrir appid
            $this.loading = false;
        });
        
    }
});
