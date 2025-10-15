var mymode = document.getElementById("textcolor");
var mymode2 = document.getElementById("div2");
function change() {
    var Name = mymode.children[1].children[0].value;
    var Age = mymode.children[2].children[0].value;
    var Birthday = mymode.children[3].children[0].value;

    var output = "My name is" + Name + "I am" + Age + "Years old, I was born on" + Birthday + "."
    document.getElementById("outputtext").innerText = output;
}

function hider(){
    var nodestyle = mymode2.style.display;
    var status = nodestyle == "none" ? "block" : "none";
    mymode2.style.display = status;
    status == "block" ? alert("section shown") : alert("section shown");
}
