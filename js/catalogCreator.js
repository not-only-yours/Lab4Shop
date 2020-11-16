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
                    text.innerHTML = "suggested"
                    mainBlockOfCatalog.appendChild(text)
                    text.style.marginTop = "-50px"
                    text.style.backgroundColor = "green"
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
                    var aa = "product/"
                    location.hash = aa.concat(this.id)
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
                    var fir = "catalog/"
                    location.hash = fir.concat(this.id)
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

    var div1 = document.createElement('div')
    div1.classList.add("wrapper")
    var div2 = document.createElement('div')
    div2.classList.add("main__about")
    div1.appendChild(div2)
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    div3.classList.add("about__left")
    div4.classList.add("about__right")
    div2.appendChild(div3)
    div2.appendChild(div4)
    div4.style.marginTop = "-80px"
    var img = document.createElement('img')
    img.src = aa.images
    img.style.width = "3000px"
    img.style.marginLeft = "50px"
    img.classList.add("mw-100")
    div3.appendChild(img)
    var h1 = document.createElement('h1')
    h1.innerHTML = "SOME WORDS ABOUT BIKE"
    var p = document.createElement('p')
    p.innerHTML = aa.info
    div4.appendChild(h1)
    div4.appendChild(p)
    var ul = document.createElement('ul')
    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    var first1 = aa.prise
    var second = "price: "
    li1.innerHTML = second.concat(first1)
    li1.style.fontSize = "50px"
    li1.style.textTransform = "uppercase"
    li1.style.fontWeight = "bold"
    li1.style.backgroundColor = "#e7dedb"
    li1.style.listStyleType = "none"
    li1.style.borderRadius = "10px"
    first1 = aa.categoryID
    second = "Category: "
    li2.innerHTML = second.concat(first1)
    li2.style.listStyleType = "none"
    li2.style.textTransform = "uppercase"
    li2.style.fontWeight = "bold"
    ul.appendChild(li1)
    ul.appendChild(li2)
    div4.appendChild(ul)
    var btn = document.createElement("BUTTON");
    btn.classList.add('AddButton')
    var first = aa.id
    var two = "Cart"
    btn.id = first.concat(two)
    btn.innerHTML = "to cart";
    btn.onclick = function (){
        addToLocalStorage(aa);
    }
    div4.appendChild(btn)
    //console.log(btn.id)
    document.getElementById('allMain').appendChild(text)
    document.getElementById('allMain').appendChild(div1)
}





//content of li
function contentofBlock(ai){
    mainBlockOfCatalog.innerHTML = ""
    createCatalog()
    addClickeventtoCatalogLi()


    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for(var key in data.productsCategories) {
                if(ai === data.productsCategories[key].url){
                    var text = document.createElement('H1')
                    text.style.backgroundColor = "#b7a49e"
                    text.style.width = "98.3%"
                    text.innerHTML = data.productsCategories[key].name
                    document.getElementById('allMain').appendChild(text)
                    var p = document.createElement('p')
                    p.innerHTML = data.productsCategories[key].info
                    p.style.paddingLeft = "40px"
                    p.style.paddingight = "40px"
                    p.style.paddingTop = "20px"
                    p.style.paddingBottom = "20px"
                    p.style.fontSize = "20px"
                    p.style.borderRadius = "10px"
                    p.style.backgroundColor = "#cbcbcb"
                    //TODO write info about
                    document.getElementById('allMain').appendChild(p)
                }
            }
            })
        .catch(err => console.log(err)))


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


