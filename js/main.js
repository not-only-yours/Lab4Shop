
document.getElementById("basket").onclick = function (){
    location.hash += '/basket'
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


