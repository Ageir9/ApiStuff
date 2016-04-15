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

                //Hendir burt óþarfa hlutum
                /*delete strippedData.killID;
                delete strippedData.solarSystemID;
                delete strippedData.moonID;
                delete strippedData.victim.characterID;
                delete strippedData.victim.corporationID;
                delete strippedData.victim.allianceId;
                delete strippedData.victim.factionID;
                delete strippedData.victim.factionName;
                delete strippedData.attackers.characterID;
                delete strippedData.attackers.corporationID;
                delete strippedData.attackers.allianceId;
                delete strippedData.attackers.factionID;
                delete strippedData.attackers.factionName;
                delete strippedData.attackers.securityStatus;
                delete strippedData.attackers.weaponTypeID;
                delete strippedData.items;
                delete strippedData.zkb.locationID;
                delete strippedData.zkb.hash;
                delete strippedData.zkb.points;*/
                //return data
            });
            
            $this.$data.output = killData;
            console.log($this.output);
            $this.loading = false;
        });
    }
});
