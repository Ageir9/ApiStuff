/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";
$(document).ready(function () {
    
    //MODEL
    var Model = function () {
        $.getJSON("https://zkillboard.com/api/alliance/99006112/", function (killData) {
            killData.forEach(function (data) {

                var strippedData = data;

                //Hendir burt óþarfa hlutum
                delete strippedData.killID;
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
                delete strippedData.zkb.points;
                //return data
                return this;
            });
        });
    };
    //VIEW
    var View = function (Model) {
        this.model = Model;
        return this;
    };
    
    View.prototype.render = function () {
        document.getElementById('MainTable').innerHTML = this.output();
    };
    
        
    //CONTROLLER
    var Controller = function (Model) {
        return this;
        
    };
    Controller.prototype.loadView = function (id) {
        //Prepare view
        var view = new View(Model);
        //Load view
        view.render();
    };
});
