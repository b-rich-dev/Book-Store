function getBooksTemplate(index) {
    return `<div class="selection_template">
                <div id="name" class="name"><h1>${books[index].name}</h1></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price"><h1>${books[index].price.toFixed(2)} €</h1></div>
                        <div class="like_counter">
                            <div id="likes" class="like"><h4>${books[index].likes}</h4></div>
                            <div id="heart${index}" class="like_button" onclick="toggleLikeButtonOnClick(${index})"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author">${books[index].author}</td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year">${books[index].publishedYear}</td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre">${books[index].genre}</td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments" class="writen_comments">${renderComments(index)}</div>
                    <div class="input_and_buttom">
                        <input id="comment_input${index}" onkeydown="checkEnter(event, ${index})" type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick="saveAndShowNewComment(${index})"></div>
                    </div>
                </div>
            </div>`;
}


function getBeFirstComment() {
    return `<p>Schreibe den ersten Kommentar!</p>`;
}


function getComments(commentObj) {
    return `    <div class="comments_field">
                    <p class="left">${commentObj.name}:</p>
                    <p class="right">${commentObj.comment}</p>
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