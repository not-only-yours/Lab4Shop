function createPageOfSales() {
    document.getElementById('allMain').innerHTML = ""
    var div = document.createElement('div')
    div.classList.add('grids')

    JSON.stringify(sendRequest('GET', URL)
        .then(data => {
            for (var key in data.sales) {
                console.log(key)
                var gridElement = document.createElement('div')
                gridElement.classList.add('gridElement')
                div.appendChild(gridElement)
                var img = document.createElement('img')
                img.src = data.sales[key].url;
                var title = document.createElement('p')
                title.innerHTML = data.sales[key].title
                var button = document.createElement('BUTTON')
                gridElement.appendChild(img)
                gridElement.appendChild(title)
                gridElement.appendChild(button)
                button.innerHTML = "visit"
                button.onclick = () =>{
                    createPage(data.sales[key]);
                }
            }
        })
        .catch(err => console.log(err)))


    document.getElementById('allMain').appendChild(div)
}


function createPage(aa){
    var text = document.createElement('H1')
    text.innerHTML = aa.title

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
    img.src = aa.url
    img.style.width = "3000px"
    img.style.marginLeft = "50px"
    img.classList.add("mw-100")
    div3.appendChild(img)
    var h1 = document.createElement('h1')
    h1.innerHTML = "SOME WORDS ABOUT ACTION"
    var p = document.createElement('p')
    p.innerHTML = aa.info
    div4.appendChild(h1)
    div4.appendChild(p)
    var ul = document.createElement('ul')
    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    var first1 = aa.date
    var second = "date: "
    li1.innerHTML = second.concat(first1)
    li1.style.fontSize = "20px"
    li1.style.textTransform = "uppercase"
    li1.style.fontWeight = "bold"
    li1.style.backgroundColor = "#e7dedb"
    li1.style.listStyleType = "none"
    li1.style.borderRadius = "10px"
    ul.appendChild(li1)
    div4.appendChild(ul)
    var btn = document.createElement("BUTTON");
    btn.classList.add('AddButton')
    var first = aa.id
    var two = "Cart"
    btn.id = first.concat(two)
    btn.innerHTML = "start shopping";
    btn.onclick = function (){
        location.hash = "catalog"
    }
    div4.appendChild(btn)
    //console.log(btn.id)
    document.getElementById('allMain').appendChild(text)
    document.getElementById('allMain').appendChild(div1)
}