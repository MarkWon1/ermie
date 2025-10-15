var selectInput = document.getElementById("selector");
var imageholder = document.getElementById("imageHolder");

function ChangePic(value){
    if(value == "1"){
        imageHolder.src = "download (5).jpg"
    }else if(value == "2"){
        imageHolder.src = "frieren.jpg"
    }else if(value == "3"){
        imageHolder.src = "Sangwon-nim.jpg"
    }
}