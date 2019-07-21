var today = new Date();
var otherDate = new Date(1978,00,29,11,30,00);
var theDate = new Date(2019,06,21,18,46);
var thebDate = new Date(2019,06,21,18,46);

console.log(today);
console.log(otherDate.getDay());
console.log(otherDate.getTime());

if(theDate == thebDate){
    console.log("Dates égales.");
}

console.log(otherDate);

otherDate.setMonth(5);
    console.log(otherDate);
    
if(theDate.getTime() == thebDate.getTime()){
    console.log("Dates égales, comparables grâce à getTime().");
}