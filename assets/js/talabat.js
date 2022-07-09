
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
var btns = Array.from(document.getElementsByClassName("header-p"));
   
function animation() {
    btns.forEach(function (dot) {
        dot.classList.remove("tap-active");
    });
    btns[currenttab - 1].classList.add("tap-active");
}
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        currenttab = parseInt(this.getAttribute("data-index"));
        animation();
    }
}
// add to car function
 