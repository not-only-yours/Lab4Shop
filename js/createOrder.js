

document.getElementById('createorder').onclick = () =>{
    createOrder();
    document.getElementById('basket').style.display = "none"
    document.getElementById('basketDi').style.display = "none"
    document.getElementById("cart").style.display = "none";
    document.getElementById("menu").style.display = "block";
}


function createOrder() {
    var div = document.createElement('div')
    div.style.backgroundColor = "white"
    var h1 = document.createElement('h1')
    div.appendChild(h1)
    h1.innerHTML = "confirm order"
    var div1 = document.createElement('div')
    div1.classList.add("parent")
    div.appendChild(div1)
    var div2 = document.createElement('div')
    div2.classList.add("div1")
    div1.appendChild(div2)
    var p = document.createElement('p')
    p.innerHTML = "Name"
    div2.appendChild(p)
    var inName = document.createElement('input')
    inName.type = "text"
    inName.id = "name"
    div2.appendChild(inName)
    div3 = document.createElement('div')
    div3.classList.add("div2")
    div1.appendChild(div3)
    p1 = document.createElement('p')
    p1.innerHTML = "Surname"
    div3.appendChild(p1)

    var input = document.createElement('input')
    input.type = "text"
    div3.appendChild(input)

    var div4 = document.createElement('div')
    div4.classList.add('div3')
    div1.appendChild(div4)
    var p2 = document.createElement('p')
    p2.innerHTML = "Telephone"
    div4.appendChild(p2)
    var input1 = document.createElement('input')
    input1.type = "text"
    div4.appendChild(input1)
    div5 = document.createElement('div')
    div5.classList.add('div4')
    div1.appendChild(div5)
    var p3 = document.createElement('p')
    p3.innerHTML = "Email"
    div5.appendChild(p3)
    var input2 = document.createElement('input')
    input2.type = "text"
    div5.appendChild(input2)
    document.getElementById('allMain').innerHTML = ""
    document.getElementById('allMain').appendChild(div)

    div6 = document.createElement('div')
    document.getElementById('allMain').appendChild(div6)
    var h1second = document.createElement('h1')
    h1second.innerHTML = "cart"
    h1second.style.width = "98.3%"
    h1second.style.backgroundColor = "#b7a49e"
    div6.appendChild(h1second)
    div6.classList.add('block')
    if (localStorage["cart"])
        creator()
    else {
        var h1third = document.createElement('h1')
        h1third.innerHTML = "cart is empty. Add smth to confirm order"
        h1third.style.width = "98.3%"
        h1third.style.backgroundColor = "#fafafa"
        div6.appendChild(h1third)
    }
}


function creator() {
    var arr = JSON.parse(localStorage["cart"])
    console.log(arr)
    for (var key in arr) {
        document.getElementById('basketDi').innerHTML = ""
        for (var key in arr) {
            catalogCreator(arr[key])
        }
    }
}

function catalogCreator(aa){
        var divtoAdd = document.createElement('div')
        divtoAdd.classList.add("oneofItemInCart")
    divtoAdd.style.backgroundColor = "gray"
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
            createOrder()
        }
        btn.innerHTML = "delete";
        divtoAdd.appendChild(img)
        divtoAdd.appendChild(p)
        divtoAdd.appendChild(input)
        divtoAdd.appendChild(text)
        divtoAdd.appendChild(btn)
        document.getElementById('allMain').appendChild(divtoAdd)
}