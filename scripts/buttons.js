function toggleLikeButton(idNumber) {

    document.getElementById('heart' + idNumber)?.classList.toggle('like_button_pressed');

}


// function toggleLikeButtonIfLiked() {
//     for (let indexLiked = 0; indexLiked < books.length; indexLiked++) {

//         if (books[index].liked === true) {
//             document.getElementById(heartId)?.classList.toggle('like_button_pressed');
//             books[index].likes++;
//         }

//     }

// }


// function toggleLikeButtonIfLiked() {
//     for (let index = 0; index < books.length; index++) {
//         if (books[index].liked === true) {
//             let heartId = 'heart' + (index + 1);
//             let likesId = 'likes' + (index + 1);

//             // Herz toggeln
//             document.getElementById(heartId)?.classList.toggle('like_button_pressed');

//             // Likes-Zahl im Objekt erhöhen
//             books[index].likes++;

//             // Likes-Zahl im DOM aktualisieren
//             const likesRef = document.getElementById(likesId);
//             if (likesRef) {
//                 likesRef.textContent = books[index].likes;
//             }
//         }
//     }
// }


// function renderInitialLikes() {
//     for (let i = 0; i < books.length; i++) {
//         const heart = document.getElementById('heart' + (i + 1));
//         const likes = document.getElementById('likes' + (i + 1));

//         if (books[i].liked) {
//             heart?.classList.add('like_button_pressed');
//         }

//         if (likes) {
//             likes.textContent = books[i].likes;
//         }
//     }
// }


function saveData(index) {
    let comment_inputRef = document.getElementById('comment_input' + (index + 1));
    let commentValue = comment_inputRef.value.trim();

    if (commentValue === "") {
        myToast()
        return;
    }

    const newComment = {
        name: "Gast",
        comment: commentValue
    };

    books[index].comments.push(newComment);

    saveToLocalStorage();
    renderCommentsForBook(index);

    comment_inputRef.value = "";
}


function renderCommentsForBook(index) {
    let commentsRef = document.getElementById('comments' + (index + 1))
    if (!commentsRef) return;

    commentsRef.innerHTML = "";

    if (books[index].comments.length > 0) {
        for (let comment of books[index].comments) {
            commentsRef.innerHTML += `
                <div class="comments_field">
                    <p class="left">${comment.name}:</p>
                    <p class="right">${comment.comment}</p>
                </div>
            `;
        }
    }
}


function myToast() {
    let toast = document.getElementById("toast");

    toast.className = "show";

    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}


function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}


function getFromLocalStorage() {
    let storedBooks = JSON.parse(localStorage.getItem("books"));

    if (storedBooks) {
        books = storedBooks;
    }
}


function checkEnter(event, index) {
    if (event.key === "Enter") {
        saveData(index);
    }
}