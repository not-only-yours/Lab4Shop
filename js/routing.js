window.onload = () => {
    knowPrise()
    routing()
}

window.onhashchange = () => {
    knowPrise()
    routing()
}


var checker = false
function routing(){
    //console.log(location.hash)
    if(location.hash.slice(-7) === '/basket'){
            document.getElementById("basketDi").style.display = "block";
            document.getElementById("cart").style.display = "block";
            document.getElementById("menu").style.display = "none";
    }
    else if(location.hash.slice(1) === 'offers'){
        createPageOfSales()
        document.getElementById('basket').style.display = "block"
    }
    else if(location.hash.substring(1,9) === 'catalog/'){
            var id = location.hash.slice(9)
        if(id === 'bmx' || id === 'vintage' || id === 'mtb' || id === 'sport') {
            console.log(id)
            contentofBlock(id)
        }else{
            location.hash = ""
        }
        }else if(location.hash.substring(1,9) === 'product/'){
            if(parseInt(location.hash.slice(9)) || location.hash.slice(9) === '0') {
                var id1 = location.hash.slice(9)
                contentofElement(id1)
            }else{
                location.hash = ""
            }
    }else if(location.hash.substring(1,7) === 'offer/'){
        if(parseInt(location.hash.slice(7)) || location.hash.slice(7) === '0') {
            var id2 = location.hash.slice(7)
            create(id2)
        }else{
            location.hash = ""
        }
    } else if(location.hash.slice(1) === 'catalog'){
        createAllPageCatalog()
        addClickeventtoCatalogLi()
        addClickeventtoGridButtons()
        document.getElementById('basket').style.display = "block"
        createCart()
    }else if(location.hash.slice(1) === 'createOrder'){
        document.getElementById('basket').style.display = "none"
        document.getElementById('basketDi').style.display = "none"
        document.getElementById("cart").style.display = "none";
        document.getElementById("menu").style.display = "block";
        createOrder();

    }else if(location.hash.slice(1) === 'checkOrderStatus/' + answerId && reqestSended){
        createVarOfOrder();
        checkOrderStatus();
        creator()
        localStorage.removeItem("cart")
        document.querySelectorAll('.orderDelete').forEach(e => e.remove());
    }
        else{
            createMain();

            document.getElementById('basket').style.display = "block"
            createCart()
        }
}


function browseShop() {
    location.hash = "catalog"
}