'use strict';

angular
    .module('itemList')
    .controller('ItemListController', ItemListController);

ItemListController.inject = ['$mdDialog'];
function ItemListController($mdDialog) {
    var vm = this;

    vm.newItem = {};
    vm.itens= [];

    vm.addItem = addItem;
    vm.resolve = resolve;
    vm.showCustom = showCustom;

    activate();

    ///////////////////////////

    function activate(){
        vm.itens= [{
            title: "Task task #1",
            content: "asdjasd asdkjhasd askjdnaskdjhs kjshdak"
        }];
    }

    function addItem(newItem){
        vm.itens.push(newItem);
        console.log(newItem);
        vm.newItem = {
            title: '',
            content: '',
        };
    };

    function resolve(item){
        var index = vm.itens.indexOf(item);
        index!=-1?vm.itens.splice(index, 1):console.log("nao existe no array");
    };

    function showCustom(event,item) {    
        $mdDialog.show({
            clickOutsideToClose: true,     
            preserveScope: true,       
            targetEvent: event,    
            controllerAs: 'dlg',
            templateUrl: 'item-list/item-list-editdialog.template.html',
            controller: 'ItemListDialogController',
            locals: {
                obj: angular.copy(item)
            },
        }).then(function(answer) {
                var index = vm.itens.indexOf(item);
                index!=-1?vm.itens.splice(index, 1,answer):console.log("nao existe no array");
                console.log(answer);
            }, function() {
                console.log("ação cancelada");
        });
    }
}