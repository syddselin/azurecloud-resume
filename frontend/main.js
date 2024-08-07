module.exports = async function (context, req) {
    context.log('Counter function is triggered.');

    // Counter değerini al
    let counter = context.bindings.counter;

    // İstek türüne göre işlem yap
    if (req.method === 'GET') {
        // Counter değerini döndür
        context.res = {
            body: counter.toString()
        };
    } else if (req.method === 'POST') {
        // Counter değerini artır
        counter++;
        context.bindings.counter = counter;

        // Artırılmış counter değerini döndür
        context.res = {
            body: counter.toString()
        };
    } else {
        // Desteklenmeyen istek türü
        context.res = {
            status: 400,
            body: 'Bad Request'
        };
    }

    // Counter değerini frontend'e gönder
    context.res.headers['Content-Type'] = 'text/html';
    context.res.body = `<a id="counter">${counter}</a>`;
};


window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const productionApiUrl = 'https://azureresumevisitorcounter.azurewebsites.net/api/GetVisitorCounter?';
const localApiUrl = 'http://localhost:7071/api/GetVisitorCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(productionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}