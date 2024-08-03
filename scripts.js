function functionone(){
    var one = document.getElementById("1");
    var two = document.getElementById("1.1");
    var three = document.getElementById("2");
    var button = document.getElementById("problem").value;
    console.log(button);
    if(button == "1"){
        one.classList.add("hide");
        one.classList.remove("show");
        three.classList.add("show");
        three.classList.remove("hide")
    }
    else{
        two.classList.add("show");
        two.classList.remove("hide")
        one.classList.add("hide");
        one.classList.remove("show");
    }
}

function functiontwo(){
    var one = document.getElementById("2");
    var two = document.getElementById("2.1");
    var three = document.getElementById("3");
    var button = document.getElementById("flu").value;
    console.log(button);
    if(button == "2"){
        one.classList.add("hide");
        one.classList.remove("show");
        three.classList.add("show");
        three.classList.remove("hide");
    }
    else if (button=="1"){
        two.classList.add("show");
        two.classList.remove("hide")
        one.classList.add("hide");
        one.classList.remove("show");
    }
}

function functionthree(){
    var one = document.getElementById("3");
    var two = document.getElementById("3.1");
    var three = document.getElementById("4");
    var button = document.getElementById("heartburn").value;
    console.log(button);
    if(button == "2"){
        one.classList.add("hide");
        one.classList.remove("show");
        three.classList.add("show");
        three.classList.remove("hide");
    }
    else if (button=="1"){
        two.classList.add("show");
        two.classList.remove("hide")
        one.classList.add("hide");
        one.classList.remove("show");
    }
}

function functionfour(){
    var one = document.getElementById("4");
    var two = document.getElementById("4.1");
    var three = document.getElementById("5");
    var button = document.getElementById("fever").value;
    console.log(button);
    if(button == "2"){
        one.classList.add("hide");
        one.classList.remove("show");
        three.classList.add("show");
        three.classList.remove("hide");
    }
    else if (button=="1"){
        two.classList.add("show");
        two.classList.remove("hide")
        one.classList.add("hide");
        one.classList.remove("show");
    }
}

function functionfive(){
    var one = document.getElementById("5");
    var two = document.getElementById("5.1");
    var three = document.getElementById("6");
    var button = document.getElementById("blood").value;
    console.log(button);
    if(button == "2"){
        one.classList.add("hide");
        one.classList.remove("show");
        three.classList.add("show");
        three.classList.remove("hide");
    }
    else if (button=="1"){
        two.classList.add("show");
        two.classList.remove("hide")
        one.classList.add("hide");
        one.classList.remove("show");
    }
}

function functionseven(){
    var one = document.getElementById("7");
    var two = document.getElementById("5.1");
    two.classList.add("show");
    two.classList.remove("hide")
    one.classList.add("hide");
    one.classList.remove("show");;



}

function functionsix(){
    var one = document.getElementById("6");
    var two = document.getElementById("6.1");
    var three = document.getElementById("7");
    var button = document.getElementById("chest").value;
    console.log(button);
    if(button == "2"){
        one.classList.add("hide");
        one.classList.remove("show");
        three.classList.add("show");
        three.classList.remove("hide");
    }
    else if (button=="1"){
        two.classList.add("show");
        two.classList.remove("hide")
        one.classList.add("hide");
        one.classList.remove("show");
    }
}
