const URL = 'https://raw.githubusercontent.com/not-only-yours/Lab4Shop/main/db.json';
var json
function sendRequest(method, url, body = null) {

    showSpinner();

    return fetch(url).then(response => {
        if (response.ok) {
            setTimeout(y = function () {
                hideSpinner()
            },100)
            return response.json();
        }

        return response.json().then(error => {
            hideSpinner();
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e

        })
    })
}



JSON.stringify(sendRequest('GET', URL)
    .then(data => {
        //console.log(data)
    })
    .catch(err => console.log(err)))


function sendPOST(method,url,body = null){


    return fetch(url, {
        method: method,
        body: JSON.stringify(body)
        }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        }).then((data) => {
            console.log(data)
        })
    })
}


