

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
    document.getElementById("products").classList.toggle("active");
}

//card slider
var slidercards = Array.from(document.getElementsByClassName("slider-card")),
    slidercards1 = Array.from(document.getElementsByClassName("slider-card1")),
    slidercards2 = Array.from(document.getElementsByClassName("slider-card2")),
    slidercards3 = Array.from(document.getElementsByClassName("slider-card3")),
    slidercards4 = Array.from(document.getElementsByClassName("slider-card4")),
    slidercards5 = Array.from(document.getElementsByClassName("slider-card5")),
    count = slidercards.length,
    count1 = slidercards1.length,
    count2 = slidercards2.length,
    count3 = slidercards3.length,
    count4 = slidercards4.length,
    count5 = slidercards5.length,
    toright = document.getElementById("right"),
    toleft = document.getElementById("left"),
    toright1 = document.getElementById("right1"),
    toleft1 = document.getElementById("left1"),
    toright2 = document.getElementById("right2"),
    toleft2 = document.getElementById("left2"),
    toright3 = document.getElementById("right3"),
    toleft3 = document.getElementById("left3"),
    toright4 = document.getElementById("right4"),
    toleft4 = document.getElementById("left4"),
    toright5 = document.getElementById("right5"),
    toleft5 = document.getElementById("left5"),
    currentcard = 1,
    currentcard1 = 1,
    currentcard2 = 1,
    currentcard3 = 1,
    currentcard4 = 1,
    currentcard5 = 1;



function check() {


    if (currentcard == 1) {
        toright.classList.add("stop");
    } else {
        toright.classList.remove("stop");
    }
    if (currentcard > 6) {
        toleft.classList.add("stop");
        
    } else {
        toleft.classList.remove("stop");
        
    }
    if (currentcard1 == 1) {
        
        toright1.classList.add("stop");
        
    } else {
        
        toright1.classList.remove("stop");
        
    }
    if (currentcard1 > 6) {
       
        toleft1.classList.add("stop");
        
    } else {
        
        toleft1.classList.remove("stop");
        
    }
    if (currentcard2 == 1) {
        
        toright2.classList.add("stop");
        
    } else {
        
        toright2.classList.remove("stop");
        
    }
    if (currentcard2 > 6) {
        
        toleft2.classList.add("stop");
        
    } else {
        
        toleft2.classList.remove("stop");
        
    }
    if (currentcard3 == 1) {
        
        toright3.classList.add("stop");
        
    } else {
        
        toright3.classList.remove("stop");
        
    }
    if (currentcard3 > 6) {
        
        toleft3.classList.add("stop");
        
    } else {
        
        toleft3.classList.remove("stop");
        
    }
    if (currentcard4 == 1) {
       
        toright4.classList.add("stop");
        
    } else {
        
        toright4.classList.remove("stop");
        
    }
    if (currentcard4 > 6) {
        
        toleft4.classList.add("stop");
        
    } else {
        
        toleft4.classList.remove("stop");
        
    }
    if (currentcard5 == 1) {
        
        toright5.classList.add("stop");
    } else {
        
        toright5.classList.remove("stop");
    }
    if (currentcard5 > 6) {
        
        toleft5.classList.add("stop");
    } else {
        
        toleft5.classList.remove("stop");
    }
};

toleft.onclick = function () {
    if (toleft.classList.contains("stop")) {
        return false;
    } else {
        slidercards[currentcard - 1].classList.add("goleft");
        currentcard++;
        check();
    }
};
toright.onclick = function () {
    if (toright.classList.contains("stop")) {
        return false;
    } else {
        currentcard--;
        slidercards[currentcard - 1].classList.remove("goleft");
        check();
    }
};
toleft1.onclick = function () {
    if (toleft1.classList.contains("stop")) {
        return false;
    } else {
        slidercards1[currentcard1 - 1].classList.add("goleft");
        currentcard1++;
        check();
    }
};
toright1.onclick = function () {
    if (toright1.classList.contains("stop")) {
        return false;
    } else {
        currentcard1--;
        slidercards1[currentcard1 - 1].classList.remove("goleft");
        check();
    }
};
toleft2.onclick = function () {
    if (toleft2.classList.contains("stop")) {
        return false;
    } else {
        slidercards2[currentcard2 - 1].classList.add("goleft");
        currentcard2++;
        check();
    }
};
toright2.onclick = function () {
    if (toright2.classList.contains("stop")) {
        return false;
    } else {
        currentcard2--;
        slidercards2[currentcard2 - 1].classList.remove("goleft");
        check();
    }
};
toleft3.onclick = function () {
    if (toleft3.classList.contains("stop")) {
        return false;
    } else {
        slidercards3[currentcard3 - 1].classList.add("goleft");
        currentcard3++;
        check();
    }
};
toright3.onclick = function () {
    if (toright3.classList.contains("stop")) {
        return false;
    } else {
        currentcard3--;
        slidercards3[currentcard3 - 1].classList.remove("goleft");
        check();
    }
};

toleft4.onclick = function () {
    if (toleft4.classList.contains("stop")) {
        return false;
    } else {
        slidercards4[currentcard4 - 1].classList.add("goleft");
        currentcard4++;
        check();
    }
};
toright4.onclick = function () {
    if (toright4.classList.contains("stop")) {
        return false;
    } else {
        currentcard4--;
        slidercards4[currentcard4 - 1].classList.remove("goleft");
        check();
    }
};
toleft5.onclick = function () {
    if (toleft5.classList.contains("stop")) {
        return false;
    } else {
        slidercards5[currentcard5 - 1].classList.add("goleft");
        currentcard5++;
        check();
    }
};
toright5.onclick = function () {
    if (toright5.classList.contains("stop")) {
        return false;
    } else {
        currentcard5--;
        slidercards5[currentcard5 - 1].classList.remove("goleft");
        check();
    }
};
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
