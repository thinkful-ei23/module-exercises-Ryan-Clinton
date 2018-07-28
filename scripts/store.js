'use strict';
/* global cuid, Item */
/* eslint-disable no-unused-vars, no-console */

const store = (function(){
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id){
    return items.find(item => item.id === id);
  }

  function setSearchTerm(val) {
    this.searchTerm = val;
  }

  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }
  
  function addItem(name){
    try {
      Item.validateName(name);
      items.push(Item.create(name));
    } catch(e) {
      console.error(`Cannot add item: ${e}`);
    }
  }

  function findAndToggleChecked(id){
    findById(id).checked = !findById(id).checked;
  }

  function findAndUpdateName(id, newName){
    try {
      Item.validateName(newName);
      findById(id).name = newName;
    } catch (e) {
      console.error(`Cannot update name: ${e}`);
    }
  } 

  function findAndDelete (id) {
    const index = items.findIndex(item => item.id === id);
    if (index >= 0) {
      items.splice(index, 1);
    }
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    setSearchTerm,
    toggleCheckedFilter,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}() );


