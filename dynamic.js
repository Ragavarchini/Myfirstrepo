let a = 25;
    console.log(a*a);
    let car = {
        name: "honda",
        colour: "black",
        price: 20000
    }
    console.log(car.colour);
    document.write(car.colour)
    for(let x in car){
        console.log(car[x])
    }

let c=5
let b=4
console.log( " The addition of "+ c + " and " + b + " is " + c+b)


let age =50;
if(age>18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}
let string = "agjhftfkjjb "
console.log(string.length)
console.log(string.substring(2,6))
console.log(string.slice(1,4))
console.log(string.substr(2,6))


var nam = new Array();
nam[0] = "mathi";
nam[1] ="deva";
for(let x in nam){
    console.log(nam[x])
}
console.log(nam [0])

var animals = ["tiger","elephant","lion","cat"]
console.log(animals) 
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

console.log(animals[3])
console.log(animals.sort())

function run()
{
    var flower = ["jasmine","rose","lilly"]
    console.log(flower)
}
 run()
let my = () =>
{
    var flower = ["lotus","tulip","december"]
    console.log(flower)
}
 my()