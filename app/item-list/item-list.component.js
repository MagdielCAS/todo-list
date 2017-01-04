'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: function ItemListController() {
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

      }
  });