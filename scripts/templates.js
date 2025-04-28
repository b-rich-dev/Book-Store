function getNameTemplate(index) {
    return `<h1>${books[index].name}</h1>`;
}


function getPriceTemplate(index) {
    return `<h1>${books[index].price.toFixed(2)} €</h1>`;
}


function getLikesTemplate(index) {
    return `<h4>${books[index].likes}</h4>`;
}


function getAuthorTemplate(index) {
    return `${books[index].author}`;
}


function getPublishedYearTemplate(index) {
    return `${books[index].publishedYear}`;
}


function getGenreTemplate(index) {
    return `${books[index].genre}`;
}


function getCommentsTemplate(index) {
    return `${books[index].comments}`;
}


function getImpressumContent() {
    return `<div class="impressum_container">
                <h1>Impressum</h1>

                <p>Eugen Birich<br />
                    Mittlauer Weg 36<br />
                    63571 Gelnhausen</p>

                <h2>Kontakt</h2>
                <p>Telefon: 01751032571<br />
                    E-Mail: lex8787@web.de</p>

                <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
                <p>Bildquellen und Urheberrechtshinweise:</p>
                <p>Alle Bilder sind von Pixabay, Lizenz: Pixabay License</p>
            </div>`
}