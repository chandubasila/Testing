// function basicevent(){
//     alert("just started")
//     console.log(this.x);
//     console.log(this.y);
//     console.log(this.z);
// };
// var x = 10;
// x = 80;
// console.log(x);
// var x = 100;
// console.log(x);
// let y ;
// y = 50;
// console.log(y);
// const z = 90;
// console.log(z);
// const a = [1,2,3,4,5,6]
// a.push(90);
// console.log(a);
// const b = {
//     name:"chandu",
//     education:"mca",
// }
// b.job = "software developer"
// console.log(b)

// var a = 100;
// var b = "chandu";
// var c = true;
// var d ;
// var e = null;
// var f = Symbol("zoom");
// var g = 1n;

// var i = {
//     name:"chandu",
//     education:"mca",
//     job:"software"
// };

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(typeof(g));
// console.log(typeof(i));
// console.log(typeof(a));


// implicityconversion;
// console.log(2+"5");
// console.log("2"+5);
// console.log("8"-1);
// console.log("chandu"-10);
// console.log("85"*10);


//explicityconversion;
// var t = 90;
// var tr = String(t);
// var rs = t.toString();

// console.log(rs);
// console.log(tr);
// console.log(typeof(rs));
// console.log(typeof(tr));


// var o = "123.89";
// var p =Number(o);
// console.log(p);
// console.log(typeof(p));

// var r =parseInt(o);
// var y =parseFloat(o);
// console.log(r);
// console.log(y);


// var w = "90";
// var q = "chandu";
// var l = Boolean(q);
// console.log(l);

// var u = false;
// var h = Boolean(u);
// console.log(h);


var a = 90;
var b = 85;
var c = 100;
if (a<b){
    console.log("b:value is greater number")
}else if (b<c){
    console.log("c:value is greater number")
}else{
    console.log("a:value is greater number")
}

var d = 10;
++d;
var e = d;
console.log(e);

var f = 15;
++f;
var g = f;
console.log(g);

var i = 9;
--i;
console.log(i);

var k = 13;
k--;
console.log(k);


var z = 10<=10;
var y = 9>=9;
console.log(z&&y);

var x = 89 >88;
var u = 96 > 95;
console.log(x||u);

var t =10;
var r = (t>15)? "t is big number":"r is big number";
console.log(r);



switch (5) {
    case 1:
        console.log("fst statement excuited")
        break;
    case 2:
        console.log("2nd statement excuited")
        break;
    case 3:
        console.log("3rd statement excuited")
        break;
    case 4:
        console.log("4rth statement excuited")
        break;
    case 5:
        console.log("5th statement excuited")
        break;
    default:
        console.log("default is excuited")
        break;
}


// for(var q=0; q<=10; q++){
//     console.log(q);
// }
// for(var q=0; q<=10; q++){
//     setTimeout(()=>{
//         console.log(q)
//     },5000)
// };

var w = {
    name:"chandu",
    education:"mca",
    qualification:"softwarejob"
}

for(let k in w){
    console.log(k+ ":" +w[k])
}

var a = [70,80,90,400,500];

var b = "chandu";

for(let r of b){
    console.log(r)

}
// var t = 80;
// var y = 90;
var i =0;
while(i<5){
i++
console.log(i)
}


do{
    i++
console.log(i)
}while(i<6);

function person(name,education){
this.name = name,
this.education = education
};

person.prototype.greet = function (){
    console.log('hello, ' + this.name)
}
var person1 = new person("alice",30);
var person2 = new person("chandu",24);

person1.greet();
person2.greet();
console.log(person1)

// console.log(person.prototype.hasownproperty('greet'));

console.log(this);
console.log(document)