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


function getBookSelectionContent() {
    return `<div class="selection_template">
                <div id="name1" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price1"></div>
                        <div class="like_counter">
                            <div id="likes1"></div>
                            <div id="heart1" class="like_button" onclick="toggleLikeButton(1)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author1"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year1"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre1"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments1" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent2() {
    return `<div class="selection_template">
                <div id="name2" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price2"></div>
                        <div class="like_counter">
                            <div id="likes2"></div>
                            <div id='heart2' class='like_button' onclick="toggleLikeButton(2)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author2"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year2"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre2"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments2" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent3() {
    return `<div class="selection_template">
                <div id="name3" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price3"></div>
                        <div class="like_counter">
                            <div id="likes3"></div>
                            <div id="heart3" class="like_button" onclick="toggleLikeButton(1)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author3"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year3"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre3"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments3" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent4() {
    return `<div class="selection_template">
                <div id="name4" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price4"></div>
                        <div class="like_counter">
                            <div id="likes4"></div>
                            <div id='heart4' class='like_button' onclick="toggleLikeButton(2)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author4"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year4"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre4"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments4" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent5() {
    return `<div class="selection_template">
                <div id="name5" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price5"></div>
                        <div class="like_counter">
                            <div id="likes5"></div>
                            <div id="heart5" class="like_button" onclick="toggleLikeButton(1)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author5"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year5"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre5"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments5" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent6() {
    return `<div class="selection_template">
                <div id="name6" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price6"></div>
                        <div class="like_counter">
                            <div id="likes6"></div>
                            <div id="heart6" class="like_button" onclick="toggleLikeButton(2)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author6"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year6"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre6"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments6" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent7() {
    return `<div class="selection_template">
                <div id="name7" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price7"></div>
                        <div class="like_counter">
                            <div id="likes7"></div>
                            <div id="heart7" class="like_button" onclick="toggleLikeButton(1)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author7"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year7"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre7"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments7" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent8() {
    return `<div class="selection_template">
                <div id="name8" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price8"></div>
                        <div class="like_counter">
                            <div id="likes8"></div>
                            <div id='heart8' class='like_button' onclick="toggleLikeButton(2)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author8"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year8"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre8"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments8" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}


function getBookSelectionContent9() {
    return `<div class="selection_template">
                <div id="name9" class="name"></div>
                <div class="book"><img src="./assets/img/to-learn-4759967_1280.png" alt="Buch"></div>
                <div class="info">
                    <div class="price">
                        <div id="price9"></div>
                        <div class="like_counter">
                            <div id="likes9"></div>
                            <div id="heart9" class="like_button" onclick="toggleLikeButton(2)"></div>
                        </div>
                    </div>
                    <div class="info_text">
                        <table>
                            <tr>
                                <td><b>Author</b></td>
                                <td>:</td>
                                <td id="author9"></td>
                            </tr>
                            <tr>
                                <td><b>Erscheinungsjahr</b></td>
                                <td>:</td>
                                <td id="published_year9"></td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td id="genre9"></td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div id="comments9" class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`;
}