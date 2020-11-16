
document.getElementById("basket").onclick = function (){
    if(location.hash.slice(-7) === '/basket') {
        location.hash = location.hash.substring(0, location.hash.length - 7)
        document.getElementById("basketDi").style.display = "none";
        document.getElementById("cart").style.display = "none";
        document.getElementById("menu").style.display = "block";
    }
    else {
        location.hash += '/basket'
    }
}



document.getElementById("bikes").onclick = function () {
    location.hash = 'catalog';
}

document.getElementById("main").onclick = function (){
    location.hash = '';
    createMain();

    document.getElementById('basket').style.display = "block"
    createCart()
}


document.getElementById('offers').onclick = () => {
    location.hash = 'offers'
    routing()
}



window.onload = () => {
    location.hash = '';
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


function mainSale(){
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.bikes) {
                if (parseInt(data.bikes[key].id) === 8) {
                    console.log("wegegwwegewfg")
                    addToLocalStorage(data.bikes[key])
                }
            }
        })
        .catch(err => console.log(err)))
}


