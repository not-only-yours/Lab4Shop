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
                li.innerHTML = data.productsCategories[key].name
                ul.appendChild(li)
            }
        })
        .catch(err => console.log(err)))


    mainBlockOfCatalog.appendChild(catalog)
}

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
        btn.onclick = function (){
            showInfoofCurrentItem(btn.id);
        }
        divv.appendChild(btn)



        div.appendChild(divv)

        mainBlockOfCatalog.appendChild(div)
    }
        })
        .catch(err => console.log(err)))

}


function createAllPageCatalog(){
    if(gridsCreated === false){
        mainBlockOfCatalog.innerHTML = ""
        createCatalog()
        createGrids()
    }
}

function createMain(){
        mainBlockOfCatalog.innerHTML = copyMainBlock
}

function showInfoofCurrentItem(idofItem){
    mainBlockOfCatalog.innerHTML = ""
    console.log(idofItem)
}
