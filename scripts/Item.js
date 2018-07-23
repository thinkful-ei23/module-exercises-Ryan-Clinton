'use strict';

const Item  = (function () {
  const foo = 'bar';
	
  function validateName(name) {
    if (name === '') {
      throw TypeError('Name does not exist.');
    }
  } 
	
  function create(name) {
    console.log('`create` ran');
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  }

  return {
    validateName, create
  };
}() );
