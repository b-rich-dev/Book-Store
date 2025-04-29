function getNameTemplate(index) {
    return `<h1>${books[index].name}</h1>`;
}
//Ab hier

function getPriceTemplate(index) {
    return `<h1>${books[index].price.toFixed(2)} €</h1>`;
}


function getLikesTemplate(index) {
    return `<h4>${books[index].likes}</h4>`;
}


function getLikedTemplate(index) {
    return `<h4>${books[index].liked}</h4>`;
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


function booksTemplate(index) {
    return `<div class="selection_template">
                <div id="name1" class="name"><h1>${books[index].name}</h1></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price1"><h1>${books[index].price.toFixed(2)} €</h1></div>
                        <div class="like_counter">
                            <div id="likes1" class="like"><h4>${books[index].likes}</h4></div>
                            <div id="heart1" class="like_button" onclick="toggleLikeButtonOnClick(1)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author1">${books[index].author}</td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year1">${books[index].publishedYear}</td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre1">${books[index].genre}</td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments1" class="writen_comments">${books[index].comments}</div>
                    <div class="input_and_buttom">
                        <input id="comment_input1" onkeydown="checkEnter(event, 0)" type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick="saveComment(0)"></div>
                    </div>
                </div>
            </div>`;
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