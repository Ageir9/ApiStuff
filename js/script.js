/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";
Vue.config.debug = true;

new Vue({
    el: '#nuggets',
    data: {
        loading : true,
        output: {}
    },
    attached: function () {
        var $this = this;
        //https://zkillboard.com/api/alliance/99006112/
        $.getJSON("js/data.json", function (killData) {
            killData.forEach(function (data) {
                var strippedData = data;
            });
            
            $this.$data.output = killData;
            console.log($this.output);
            $this.loading = false;
        });
    }
});
