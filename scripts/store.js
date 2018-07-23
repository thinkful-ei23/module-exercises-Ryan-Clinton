
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
  	return items.find(x => x.id === id);
  
  }

  function setSearchTerm(val) {
   searchTerm = val;
  }

   function toggleCheckedFilter() {
    hideCheckedItems = !hideCheckedItems;
  }
  

 function addItem(name){
 	try{Item.validateName(name);
	items.push(Item.create(name));
	}
	catch(e){console.error(`cannot add item: ${e}`);}
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
  const index = items.findIndex(item => item.id === id);
  if (index >= 0) {
    items.splice(index, 1);
  }
 }

  return {
    items, hideCheckedItems, searchTerm, findById, findAndDelete,findAndUpdateName,findAndToggleChecked, 
    addItem, toggleCheckedFilter, setSearchTerm
  };
}() );


