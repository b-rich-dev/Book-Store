function toggleLikeButton(idNumber) {
    document.getElementById('heart' + idNumber)?.classList.toggle('like_button_pressed');
}

function toggleLikeButtonOnClick(idNumber) {
    let book = books[idNumber - 1];
    document.getElementById('heart' + idNumber)?.classList.toggle('like_button_pressed');

    if (!book.liked) {
        book.likes++;
        book.liked = true;
    }

    else {
        book.likes--;
        book.liked = false;
    }

    const likesRef = document.getElementById('likes' + idNumber);
    if (likesRef) {
        likesRef.textContent = book.likes;
    }
}


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

    books[index].comments.unshift(newComment);

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