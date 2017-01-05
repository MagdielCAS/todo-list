'use strict';
angular
    .module('itemList')
    .controller('ItemListDialogController', ItemListDialogController);

ItemListDialogController.inject = ['$mdDialog'];
function ItemListDialogController($mdDialog,obj) {
    var dlg = this;

    dlg.editedItem = {};

    dlg.hide = hide;
    dlg.cancel = cancel;
    dlg.answer = answer;

    activate();

    ////////////////////////////

    function activate(){
        dlg.editedItem = obj;
    }

    function hide() {
        $mdDialog.hide();
    };

    function cancel() {
        $mdDialog.cancel();
    };

    function answer() {
        $mdDialog.hide(dlg.editedItem);
    };
}