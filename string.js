var pen = {
    pen_name:"Renolds",
    pen_price: 89,
    pen_colour:"blue"
}
 console.log("The pen name is ", pen.pen_name, " with the price of " ,pen.pen_price ," ,which colour is " ,pen.pen_colour)
 console.log(`the pen name is ${ pen.pen_name} with the price of ${pen.pen_price} which colour is ${pen.pen_colour}`)

 var str1 = "abc";
 var str2 = "abc";
 if(str1===str2){
    console.log("Equals")
 }
 else{
    console.log(" Not Equals")
 }

 console.log(str1===str2?str1:str2)

 str1===str2? console.log("yes") : console.log("no") 
 //str1===str2? window.console.log("yes") : console.log("no") 
 //window.alert("hi")
 //str1===str2? alert("yes") : console.log("no") 

// var b = 7;
// var a = prompt("enter any number between 1 to 10");
//    while(b!=a){
//          alert("wrong number try again")
//          a = prompt("try again")
//         }
// if(a==b)
//     alert("correct number")
 
var a = [1,2,34,5,6]
console.log(a)
console.log(a.splice(1,2,4,6,7))

const animals = ["tiger","lion","deer","rabbit","donkey","elephant "]
animals.splice(3,2,"buffolo","cat","mouse")
document.write(animals)