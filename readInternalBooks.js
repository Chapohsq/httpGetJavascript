fetch("./assets/books.json")
.then(manageResonse)
.then(onDataReady)
.catch(onError);


function manageResonse(response) {
    console.log(response);
    return response.json();
}

function onDataReady(data) {
    const listOfBooksTitle = document.getElementById("book-list");

    for (const book of data) {
        const lisItem = document.createElement('li');
        lisItem.className = "book";

        const bookTitleData = document.createTextNode("Titolo: " + book.title);
        const bookAuthorData = document.createTextNode("Autore: " + book.author);
        const bookPublisherData = document.createTextNode("Editore: " + book.publisher);
        const bookPriceData = document.createTextNode("Prezzo: " + book.price +" €");
        
        lisItem.appendChild(bookTitleData);
        lisItem.appendChild(document.createElement('br'));
        lisItem.appendChild(bookAuthorData);
        lisItem.appendChild(document.createElement('br'));
        lisItem.appendChild(bookPublisherData);
        lisItem.appendChild(document.createElement('br'));
        lisItem.appendChild(bookPriceData);

        listOfBooksTitle.appendChild(lisItem);
    }
}

function onError(error) {
    console.log(error);
}