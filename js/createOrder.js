var reqestSended = false;
var order;
document.getElementById('createorder').onclick = () =>{
    location.hash = "createOrder"
}


function createOrder() {



    var div = document.createElement('div')
    div.style.backgroundColor = "white"
    var h1 = document.createElement('h1')
    div.appendChild(h1)
    h1.innerHTML = "confirm order"
    h1.style.width = "98%"
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
    inName.pattern = "[a-zA-z]{1,15}"
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
    input.pattern = "[a-zA-z]{1,15}"
    input.id = "surname"

    var div4 = document.createElement('div')
    div4.classList.add('div3')
    div1.appendChild(div4)
    var p2 = document.createElement('p')
    p2.innerHTML = "Telephone"
    div4.appendChild(p2)


    var input1 = document.createElement('input')
    input1.type = "text"
    input1.pattern = "[+0-9]{13}"
    input1.id = "phone"

    div4.appendChild(input1)
    div5 = document.createElement('div')
    div5.classList.add('div4')
    div1.appendChild(div5)
    var p3 = document.createElement('p')
    p3.innerHTML = "Email"
    div5.appendChild(p3)


    var input2 = document.createElement('input')
    input2.type = "text"
    input2.id = "mail"
    div5.appendChild(input2)
    document.getElementById('allMain').innerHTML = ""
    document.getElementById('allMain').appendChild(div)


    div7 = document.createElement('div')
    div1.appendChild(div7)
    div7.classList.add('div1')
    var p4 = document.createElement('p')
    p4.innerHTML = "Address"
    div7.appendChild(p4)
    var input3 = document.createElement('input')
    input3.type = "text"
    div7.appendChild(input3)


    div8 = document.createElement('div')
    div1.appendChild(div8)
    div8.classList.add('div2')
    var p5 = document.createElement('p')
    p5.innerHTML = "Type of paying"
    div8.appendChild(p5)
    var input4 = document.createElement('input')
    input4.type = "text"
    div8.appendChild(input4)


    div6 = document.createElement('div')
    document.getElementById('allMain').appendChild(div6)
    var h1second = document.createElement('h1')
    h1second.innerHTML = "cart"
    h1second.style.width = "98.3%"
    h1second.style.backgroundColor = "#b7a49e"
    div6.appendChild(h1second)
    div6.classList.add('block')

    if (localStorage["cart"]) {
        creator()
        var btn = document.createElement("BUTTON")
        btn.id = "viber"
        btn.style.width = "100%"
        btn.style.height = "50px"
        btn.innerHTML = "submit"
        btn.onclick = send()
        document.getElementById('allMain').appendChild(btn)
    }
    else {
        var h1third = document.createElement('h1')
        h1third.innerHTML = "cart is empty. Add smth to confirm order"
        h1third.style.width = "98.3%"
        h1third.style.backgroundColor = "#fafafa"
        div6.appendChild(h1third)
    }

    document.getElementById('viber').onclick = function (){
        if(!validateEmail(document.getElementById('mail').value)){
            input2.setCustomValidity("invalid")
        }if(!document.getElementById('name').checkValidity() || document.getElementById('name').value === ""){
            inName.setCustomValidity("invalid")
        }if(!document.getElementById('surname').checkValidity() || document.getElementById('surname').value === ""){
            input1.setCustomValidity("invalid")
        }if(!document.getElementById('phone').checkValidity() || document.getElementById('phone').value === ""){
            input.setCustomValidity("invalid")
        }if(validateEmail(document.getElementById('mail').value) && document.getElementById('name').checkValidity() && document.getElementById('surname').checkValidity()  && document.getElementById('phone').checkValidity()){
            reqestSended = true
            location.hash = "checkOrderStatus"
        }
    }
}


function creator() {
    var arr = JSON.parse(localStorage["cart"])
    console.log(arr)
    for (var key in arr) {
        document.getElementById('basketDi').innerHTML = ""
        var paras = document.getElementsByClassName('oneofItemInCart');
        while(paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
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


function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}





function createVarOfOrder(){

    var div = document.createElement('div')
    div.style.backgroundColor = "white"
    var h1 = document.createElement('h1')
    div.appendChild(h1)
    h1.innerHTML = "confirmed order"
    var div1 = document.createElement('div')
    div1.classList.add("parent")
    div.appendChild(div1)
    var div2 = document.createElement('div')
    div2.classList.add("div1")
    div1.appendChild(div2)
    var p = document.createElement('p')
    p.innerHTML = "Name: " + document.getElementById('name').value
    div2.appendChild(p)
    var div3 = document.createElement('div')
    div3.classList.add('div1')
    div1.appendChild(div3)
    var p1 = document.createElement('p')
    p1.innerHTML = "Surname: " + document.getElementById('surname').value
    div3.appendChild(p1)
    
    order= div
}


function checkOrderStatus(){
    document.getElementById('allMain').innerHTML = ""
    document.getElementById('allMain').appendChild(order);
}