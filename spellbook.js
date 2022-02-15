fetch("./races.json")
    .then((response) => response.json())
    .then(onDataReady)
    .catch(onError);


const domain = "https://dnd5eapi.co"


function onDataReady(races) {
    const list = document.getElementById("book-list")
    for (const race of races.results) {
        const listElement = document.createElement("li")

        listElement.className = "book-card"

        addTextToHtmlElement(listElement, race.name, "large-font")

        newlink = document.createElement("a")
        newlink.innerHTML = "More Info About " + race.name
        newlink.setAttribute("href", domain + race.url)
        newlink.setAttribute("target", "_blank")
        listElement.appendChild(newlink)


        list.appendChild(listElement)
    }
}

function addTextToHtmlElement(htmlElement, text, isNewLine = false, className) {
    const span = document.createElement("span")
    span.className += className + " "
    const textnode = document.createTextNode(text)
    span.appendChild(textnode)
    htmlElement.appendChild(span)
    if (isNewLine) {
        const newline = document.createElement("br")
        htmlElement.appendChild(newline)
    }
}

function onError(error) {
    console.log(error);
}