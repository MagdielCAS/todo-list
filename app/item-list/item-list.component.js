'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: ["$mdDialog",
        function ItemListController($mdDialog) {
            this.itens= [
                {
                    title: 'Todo list',
                    content: 'testando lista',
                }
            ];

            this.orderProp = 'age';

            this.newItem = {
                title: '',
                content: '',
            };

            this.editedItem = {
                title: '',
                content: '',
            };

            this.setEdited=function(item){
                this.editedItem.title=item.title;
                this.editedItem.content=item.content;
            }

            this.addItem = function(newItem){
                this.itens.push(newItem);
                console.log(newItem);
                this.newItem = {
                    title: '',
                    content: '',
                };
            };

            this.resolve = function(item){
                var index = this.itens.indexOf(item);
                index!=-1?this.itens.splice(index, 1):console.log("nao existe no array");
            };

            this.showCustom = function(event,item,itens,editedItem,escopo) {    
                $mdDialog.show({
                    clickOutsideToClose: true,     
                    preserveScope: true,       
                    targetEvent: event,    
                    templateUrl: 'item-list/item-list-editdialog.template.html',
                    controllerAs: 'dlg',
                    controller: ['$mdDialog', 
                        function DialogController($mdDialog) {
                            this.hide = function() {
                                $mdDialog.hide();
                            };

                            this.cancel = function() {
                                $mdDialog.cancel();
                            };

                            this.answer = function(editedItem) {
                                var index = itens.indexOf(item);
                                index!=-1?itens.splice(index, 1,editedItem):console.log("nao existe no array");
                                $mdDialog.hide();
                            };
                        }
                    ]
                });
            };
        }
    ]
  });
