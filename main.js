//BODMAS Rule in JS

let numValue1=2;
let numValue2=3;
let numValue3=5;

let result= numValue1 + numValue2 * numValue3;//17
console.log(result);

result= (numValue1 + numValue2) * numValue3;//25
console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//string concatenation

let strValue1="4";
result= numValue1 + numValue2 + strValue1 + numValue3;
console.log(result);//545
/*first it will add numValue1 and numValue2 but as it finds 
strValue1 it will convert everything after that into string and concatenate*/ 

//another example

result= numValue1 + strValue1 + numValue2 + numValue3;
console.log(result);//2435
//didn't add numValue2 and numValue3