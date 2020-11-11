
document.getElementById("basket").onclick = function (){
    if(document.getElementById("basketDi").style.display === "none") {
        document.getElementById("basketDi").style.display = "block";
    }else{
        document.getElementById("basketDi").style.display = "none"
    }
}



document.getElementById("bikes").onclick = function () {
    if(document.getElementById("main").style.display === "none") {
        document.getElementById("main").style.display = "block"
        newDiv.className("Type")
    }
    else{
            document.getElementById("main").style.display = "none"
        }
}