"use strict";
var NfcReader = {
    init: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'NfcReader', 'init', []); 
    },
    bind: function(listener) {
        cordova.exec(listener, listener, 'NfcReader', 'bindListener', []); 
    }
};
module.exports = NfcReader;