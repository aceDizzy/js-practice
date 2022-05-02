let number=[]; //need consistent array name
//number != numbers
number=[1,2,3,5,3,2,1,4];
if(number[0]==number[6]) {
  console.log('Correct');
}
if(number[1]==number[7]) {
  console.log('Correct');
}
else {
  console.log('Wrong, try again');
}
//another
if(number[0]==number[4] || number[1]==number[5]) {
  console.log('Correct');
}
else {
  console.log('Wrong!!!')
}
