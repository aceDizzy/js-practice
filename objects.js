let pen={
  //3 properties: type color cost
  type:'ballpoint', //key type ; value ballpoint
  color:'black', //separated by commas
  cost:10
}; //closing brace+semic to end object
//curly brackets to define an object 'pen'
//object -> properties -> types (store)
//key (property) value (value of the property)

//accessing object properties

//objectname.propertyname - dot notation (SIMPLER)
//objectname['propertyname']
console.log(pen.cost);

let anna={
  age:16,
  school:'FCPC',
  class:'bsit 2a',
  subjects:['dsa','oop','ptech']
};
console.log(anna.subjects[1]); //display array elem
