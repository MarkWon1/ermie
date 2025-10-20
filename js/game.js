var selectInput = document.getElementById("selector");
var imageholder = document.getElementById("imageHolder");



function ChangePic(value){
    if(value == "1"){
        imageHolder.src = "/assets/rock.png"
    }else if(value == "2"){
        imageHolder.src = "/assets/paper.png"
    }else if(value == "3"){
        imageHolder.src = "/assets/scissor.png"
    }
}


function play(){
  var sangwon = document.getElementById("imageHolder2");
  var friend = document.getElementById("friend")
  var zoe = selectInput.value;
  var xin = Math.floor(Math.random() * 3) + 1;

  if (xin == 1){
    sangwon.src = "/assets/rock.png"
  }else if (xin == 2){
    sangwon.src = "/assets/paper.png"
  } else if(xin == 3){
    sangwon.src = "/assets/scissor.png"

  }if (zoe == xin){
    friend.innerHTML += "<h2>It's A Tie!</h2>";
  }else if ((zoe == 1 && xin == 3) || (zoe == 2 && xin == 1) || (zoe == 3 && xin == 2)){
    friend.innerHTML += "<h2>You Win!</h2>";

  }else {
    friend.innerHTML += "<h2>You Lose!</h2>";
  }
  
}
 
