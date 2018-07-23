
const store = (function(){
  const foo = 'bar';
  const items = [
    // { id: cuid(), name: 'apples', checked: false },
    // { id: cuid(), name: 'oranges', checked: false },
    // { id: cuid(), name: 'milk', checked: true },
    // { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id){
  	items.find(x => x === id);
  }
  

 function addItem(name){
 	try{Item.validateName(name)}
	catch(e){console.error(`cannot add item: ${e}`)}
	items.push(Item.create(name));
 }
 function findAndToggleChecked(id){
	findById(id).checked = !findById(id).checked;
 }

 function findAndUpdateName(id,newName){
	try{Item.validateName(name)}
	catch(e){console.error(`cannot add items: ${e}`)}
	findById(id).name = newName;
 } 

 function findAndDelete (id) {
	const x = this.items.findIndex(findById(id));
	this.items.splice(x,1);
 }

  return {
    items, hideCheckedItems, searchTerm, findById, findAndDelete,findAndUpdateName,findAndToggleChecked, addItem
  };
}() );


