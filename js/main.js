
document.getElementById("basket").onclick = function (){
    if(document.getElementById("basketDi").style.display === "none") {
        document.getElementById("basketDi").style.display = "block";

        document.getElementById("cart").style.display = "block";
        document.getElementById("menu").style.display = "none";
    }else{
        document.getElementById("basketDi").style.display = "none"
        document.getElementById("menu").style.display = "block";
        document.getElementById("cart").style.display = "none";
    }
}



document.getElementById("bikes").onclick = function () {
        createAllPageCatalog()
        addClickeventtoCatalogLi()
        addClickeventtoGridButtons()
    document.getElementById('basket').style.display = "block"
    createCart()
}

document.getElementById("main").onclick = function (){
    createMain();
    document.getElementById('basket').style.display = "block"
    createCart()
}


window.onload = () => {
    createCart()
}

function createCart(){
    if(localStorage["cart"]) {
        var arr = JSON.parse(localStorage["cart"])
        document.getElementById('basketDi').innerHTML = ""
        for (var key in arr) {
            createDiv(arr[key])
        }
    }else{
        document.getElementById('basketDi').innerHTML = ""
            var p = document.createElement('p')
            p.classList.add("nameofBike")
            p.classList.add("empty")
            p.innerHTML = "cart is empty"
            document.getElementById('basketDi').appendChild(p)
    }
}
