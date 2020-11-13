function addToLocalStorage(aa) {
    if(localStorage.getItem("cart") === null) {
        document.getElementById('basketDi').innerHTML = ""
        var cart = [];
        cart[0] = aa
        localStorage["cart"] = JSON.stringify(cart)
        document.getElementById('basketDi').innerHTML = ""
        createDiv(aa);
    }else{
        var  arr = JSON.parse(localStorage["cart"])
        var shouldAdd = true
        console.log(arr)
        for(var key in arr){
            if(shouldAdd && arr[key].id === aa.id){
                arr[key].pcs++
                shouldAdd= false
            }
        }
        if(shouldAdd) {
            console.log(arr)
            arr.push(aa)
        }
        document.getElementById('basketDi').innerHTML = ""
        for(var key in arr){
            createDiv(arr[key])
        }
        localStorage["cart"] = JSON.stringify(arr)
    }
}


function createDiv(aa){
    var divtoAdd = document.createElement('div')
    divtoAdd.classList.add("oneofItemInCart")
    var img = document.createElement('img')
    img.src = aa.images
    img.style.width = "100px"
    img.style.height = "100%"
    var p = document.createElement('p')
    p.classList.add("nameofBike")
    p.innerHTML = aa.productName
    var input = document.createElement('input')
    input.value = aa.pcs
    input.classList.add("inputNum")
    var text = document.createElement('p')
    text.classList.add("priseOfBike")
    text.innerHTML = aa.prise.concat("$")
    var btn = document.createElement("BUTTON");
    btn.classList.add('orderDelete')
    var first = "cart"
    var second = aa.id
    btn.id = first.concat(second)
    btn.onclick = () => {
        funcDelete(btn.id);
    }
    btn.innerHTML = "delete";
    divtoAdd.appendChild(img)
    divtoAdd.appendChild(p)
    divtoAdd.appendChild(input)
    divtoAdd.appendChild(text)
    divtoAdd.appendChild(btn)
    document.getElementById('basketDi').appendChild(divtoAdd)
}

function funcDelete(aa){
    aa = aa.replace('cart','')
    console.log(aa)
    var  arr = JSON.parse(localStorage["cart"])
    var shouldDelete = true
    console.log(arr)
    for(var key in arr){
        if(shouldDelete && arr[key].id === aa){
            arr.splice(key, 1)
            break
        }
    }
    document.getElementById('basketDi').innerHTML = ""
    for(var key in arr){
        createDiv(arr[key])
    }
    if(Array.isArray(arr) && arr.length) {
        localStorage["cart"] = JSON.stringify(arr)
    }
    else{
        localStorage.removeItem("cart")
        var p = document.createElement('p')
        p.classList.add("nameofBike")
        p.classList.add("empty")
        p.innerHTML = "cart is empty"
        document.getElementById('basketDi').appendChild(p)
    }
}



