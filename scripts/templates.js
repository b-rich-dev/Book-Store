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
                                <td>fill me</td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td>fill me</td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`
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
                                <td>fill me</td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>:</td>
                                <td>fill me</td>
                            </tr>
                        </table>
                    </div>
                </div>    
                <div class="comments">
                    <h3>Kommentare:</h3>
                    <div class="writen_comments"></div>
                    <div class="input_and_buttom">
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <div id="send" class="send_button" onclick=""></div>
                    </div>
                </div>
            </div>`
}