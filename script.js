// /**** Chiamata web AJAX (interna) ****/

// const httpRequest = new XMLHttpRequest();

// httpRequest.onreadystatechange = gestisciRisposteDelServer;

// httpRequest.open('GET', './assets/data.json');
// httpRequest.send();


// function gestisciRisposteDelServer() {
//     console.log("ready state: ", httpRequest.readyState);
//     console.log("status: ", httpRequest.status);
//     console.log("response text: ", httpRequest.responseText);
//     if (httpRequest.readyState === 4 && httpRequest.status === 200) { // httpRequest.readyState === XMLHttpRequest.DONE <--> httpRequest.readyState === 4
//         // Faccio le operazioni sul dato
//         const arrayOfUsers = JSON.parse(httpRequest.responseText); // JSON.parse() = trasforma oggetti in un file json in oggetti Javascript
//         console.log(arrayOfUsers);
//     }
// }


// /**** Chiamata web FETCH (interna) ****/

// fetch("./assets/data.json") // Lancio la chiamata.
// .then((response) => response.json()) // Gestisco i vari stati.
// .then((data) => console.log(data)) // Gestisco il dato finale.
// .catch((error) => console.log(error)); // Gestisco l'eventuale errore.


// /**** Chiamata web FETCH (esterna) ****/

// fetch("https://opentdb.com/api.php?amount=10")
// fetch("./assets/data.json")
// .then(manageResonse)
// .then(onDataReady)
// .catch(onError);


// function manageResonse(response) {
//     console.log(response);
//     return response.json();
// }

// function onDataReady(data) {
//     for (const user of data) {
//         console.log("nome: ", user.username);
//     }
// }

// function onError(error) {
//     console.log(error);
// }


/**************************************************************************************************/