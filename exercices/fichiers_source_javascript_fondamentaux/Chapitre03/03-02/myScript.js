var a = 2;
var b = 'abc';
var c = '7';

var aNum = Number(a);
var bNum = Number(b);
var cNum = Number(c);

console.log(aNum+bNum);
console.log(aNum+cNum);

if(isNaN(aNum) || isNaN(bNum)){
    console.log("L'addition est impossible !");
}else{
    console.log(aNum+bNum);
}

if(!isNaN(aNum) && !isNaN(bNum)){
    console.log(aNum+bNum);
}else{
    console.log("L'addition est impossible !");
}

console.log(a+b);
console.log(a+c);