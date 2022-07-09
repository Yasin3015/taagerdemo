
document.getElementById("bar").onclick = function () {
    document.getElementById("sideNav").classList.toggle("remove");
    document.getElementById("sideNav").classList.toggle("view");
}
document.getElementById("close").onclick = function () {
    document.getElementById("sideNav").classList.toggle("view");
    document.getElementById("sideNav").classList.toggle("remove");
}

document.getElementById("dropdown").onclick = function () {
    document.getElementById("drop").classList.toggle("remove-height");
    document.getElementById("drop").classList.toggle("height");
}

document.getElementById("secDrop").onclick = function () {
    document.getElementById("products").classList.toggle("remove-montgat");
    document.getElementById("products").classList.toggle("active")};
// add to car function
var addingButtons = Array.from(document.getElementsByClassName("face"));
var car = document.getElementById("car");
var value = parseInt(car.getAttribute("value"));
console.log(value);
for (var i = 0; i < addingButtons.length; i++) {
    addingButtons[i].onclick = function () {
        value +=1;
        car.setAttribute("value",value);
    }
} 
// add to fav function
var heartButtons = Array.from(document.getElementsByClassName("twitter"));
var fav = document.getElementById("heart");
var value2 = parseInt(fav.getAttribute("value"));
console.log(value);
for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].onclick = function () {
        value2 +=1;
        fav.setAttribute("value",value2);
    }
} 
//////////////////every prodect
let top_img = document.querySelector(".top")
let imgone = document.querySelector(".ak1");
let imgtwo = document.querySelector(".ak2");
let imgthere = document.querySelector(".ak3");
let imgfour = document.querySelector(".ak4");

imgone.onclick = function(){
    top_img.src = imgone.src
    console.log("ss")
}

imgtwo.onclick = function(){
    top_img.src = imgtwo.src
}

imgthere.onclick = function(){
    top_img.src = imgthere.src
}
imgfour.onclick = function(){
    top_img.src = imgfour.src
}
