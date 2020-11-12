var copyMainBlock = document.getElementById('allMain').innerHTML
var mainBlockOfCatalog = document.getElementById('allMain')
var gridsCreated = false


function createCatalog(){
    var catalog = document.createElement('div')
    catalog.classList.add('catalog')
    var text = document.createElement('h1')
    text.innerHTML = "catalog"
    text.style.color = "black"
    catalog.appendChild(text)
    var ul = document.createElement('ul')
    ul.classList.add('footerMenu')
    catalog.appendChild(ul)
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for (var key in data.productsCategories) {
                //console.log(data.productsCategories[key].name)
                var li = document.createElement('li')
                //console.log(data.productsCategories[key].id)
                li.id = data.productsCategories[key].url
                li.innerHTML = data.productsCategories[key].name
                ul.appendChild(li)
            }
        })
        .catch(err => console.log(err)))


    mainBlockOfCatalog.appendChild(catalog)
}

//create all grids
function createGrids(){
    var div = document.createElement('div')
    div.classList.add('Type')
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
    for(var key in data.bikes){
        var divv = document.createElement('div')
        divv.classList.add('div1')

        var img = document.createElement('img')
        img.style.width = "100%"
        img.src = data.bikes[key].images
        divv.appendChild(img)

        var p = document.createElement('p')
        p.innerHTML = data.bikes[key].productName
        divv.appendChild(p)



        var btn = document.createElement("BUTTON");
        btn.classList.add('AddButton')
        btn.id = data.bikes[key].id
        btn.innerHTML = "check";
        divv.appendChild(btn)



        div.appendChild(divv)

        mainBlockOfCatalog.appendChild(div)
    }
        })
        .catch(err => console.log(err)))

}


//grid with parsed by catalog id
function createGridsContent(elem){
    var div = document.createElement('div')
    div.classList.add('Type')
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.bikes){
                //console.log(data.bikes[key].categoryID)
                //console.log(elem)
                if(data.bikes[key].categoryID === elem) {
                    var divv = document.createElement('div')
                    divv.classList.add('div1')

                    var img = document.createElement('img')
                    img.style.width = "100%"
                    img.src = data.bikes[key].images
                    divv.appendChild(img)

                    var p = document.createElement('p')
                    p.innerHTML = data.bikes[key].productName
                    divv.appendChild(p)


                    var btn = document.createElement("BUTTON");
                    btn.classList.add('AddButton')
                    btn.id = data.bikes[key].id
                    btn.innerHTML = "check";
                    divv.appendChild(btn)


                    div.appendChild(divv)
                }
            }
            var text = document.createElement('h1')

                if(!document.getElementById("sport")) {
                    text.innerHTML = "cuggested"
                    mainBlockOfCatalog.appendChild(text)

                }
            mainBlockOfCatalog.appendChild(div)
        })
        .catch(err => console.log(err)))
}




//create catalog
function createAllPageCatalog(){
    if(gridsCreated === false){
        mainBlockOfCatalog.innerHTML = ""
        createCatalog()
        createGrids()
    }
}

//show main page
function createMain(){
        mainBlockOfCatalog.innerHTML = copyMainBlock
}


//Click button at grid
function addClickeventtoGridButtons(){
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.bikes) {
                //console.log(document.getElementById(data.bikes[key].id))
                if(document.getElementById(data.bikes[key].id))
                document.getElementById(data.bikes[key].id).onclick = function (){

                    contentofElement(this.id)
                }
            }
        })
        .catch(err => console.log(err)))
}


//click Event To li
function addClickeventtoCatalogLi(){
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.productsCategories) {
                document.getElementById(data.productsCategories[key].url).onclick = function (){
                    contentofBlock(this.id)
                }
            }
        })
        .catch(err => console.log(err)))
}

//content of element
function contentofElement(ai){
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.bikes) {
            if(ai === data.bikes[key].id){


             infoBox(data.bikes[key].id)
                createInfobox(data.bikes[key])
            }
            }
        })
        .catch(err => console.log(err)))
}


function createInfobox(aa){
    var text = document.createElement('H1')
    text.innerHTML = aa.productName

    //TODO write info about item

    var btn = document.createElement("BUTTON");
    btn.classList.add('AddButton')
    var first = aa.id
    var two = "Cart"
    btn.id = first.concat(two)
    btn.innerHTML = "to cart";
    btn.onclick = function (){
        addToLocalStorage(aa);
    }
    //console.log(btn.id)

    document.getElementById('allMain').appendChild(text)
    document.getElementById('allMain').appendChild(btn)
}





//content of li
function contentofBlock(ai){
    mainBlockOfCatalog.innerHTML = ""
    createCatalog()
    addClickeventtoCatalogLi()

    //TODO write info about every elem of ul

    var text = document.createElement('H1')
    text.innerHTML = "aaa"
    document.getElementById('allMain').appendChild(text)

    createGridsContent(ai)
    addClickeventtoGridButtons()
}




//content of element
function infoBox(ei){
    mainBlockOfCatalog.innerHTML = ""
    //console.log("info")
    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.bikes) {
                if(ei === data.bikes[key].id){
                    console.log(data.bikes[key].id)
                    createGridsContent(data.bikes[key].categoryID)
                    addClickeventtoGridButtons()
                }
            }
        })
        .catch(err => console.log(err)))
}

