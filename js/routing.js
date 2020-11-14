window.onload = () => {
    routing()
}

window.onhashchange = () =>{
    routing()
}


function routing(){
    if(location.hash.slice(-7) === '/basket'){
        if(document.getElementById("basketDi").style.display === "none") {
            document.getElementById("basketDi").style.display = "block";
            document.getElementById("cart").style.display = "block";
            document.getElementById("menu").style.display = "none";
        }else{
            document.getElementById("basketDi").style.display = "none"
            document.getElementById("menu").style.display = "block";
            document.getElementById("cart").style.display = "none";
            location.hash = location.hash.substring(0, location.hash.length - 7)
            if(location.hash.slice(1) !== "catalog" && location.hash.substring(1,9) !== 'product/')
                routing()
        }
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
        }else if(location.hash.slice(1) === 'catalog'){
        createAllPageCatalog()
        addClickeventtoCatalogLi()
        addClickeventtoGridButtons()
        document.getElementById('basket').style.display = "block"
        createCart()
    }else if(location.hash.slice(1) === 'createOrder'){
        createOrder();
        document.getElementById('basket').style.display = "none"
        document.getElementById('basketDi').style.display = "none"
        document.getElementById("cart").style.display = "none";
        document.getElementById("menu").style.display = "block";
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