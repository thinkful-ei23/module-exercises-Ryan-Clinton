'use strict';
/* global shoppingList, $ */
/* eslint-disable no-unused-vars, no-console */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});