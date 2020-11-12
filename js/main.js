
document.getElementById("basket").onclick = function (){
    if(document.getElementById("basketDi").style.display === "none") {
        document.getElementById("basketDi").style.display = "block";
    }else{
        document.getElementById("basketDi").style.display = "none"
    }
}



document.getElementById("bikes").onclick = function () {
        createAllPageCatalog()
}

document.getElementById("main").onclick = function (){
    createMain();
}
