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
            age: 1
        }
        ];

        this.orderProp = 'age';

        this.newItem = {
            title: '',
            content: '',
            age: this.itens.length + 1
        };

        this.addItem = function(newItem){
            this.itens.push(newItem);
            console.log(newItem);
            this.newItem = {
                title: '',
                content: '',
                age: this.itens.length + 1
            };
        };

      }
  });