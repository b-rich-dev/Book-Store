function init() {
    getFromLocalStorage();
    renderBooksTemplate();
}

function renderBooksTemplate() {
    let booksRef = document.getElementById('content');
    booksRef.innerHTML = "";

    for (let indexArr = 0; indexArr < books.length; indexArr++) {
        booksRef.innerHTML += getBooksTemplate(indexArr);
    }

    renderRedHeartIfLiked();
}


function renderRedHeartIfLiked() {
    for (let indexArr = 0; indexArr < books.length; indexArr++) {
        if (books[indexArr].liked === true) {
            toggleLikeButton(indexArr);
        }
    }
}


function renderComments(index) {

    let comments = books[index].comments;
    if (!comments || comments.length === 0) {
        return getBeFirstComment();
    }

    let commentsHTML = "";
    for (let commentObj of comments) {
        commentsHTML += getComments(commentObj)
    }
    return commentsHTML;
}


function renderImpressumContent() {
    let impressumRef = document.getElementById('impressum')
    impressumRef.innerHTML += getImpressumContent();
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
        addNewComment(index);
    }
}


function addNewComment(index) {
    let commentInputRef = document.getElementById('comment_input' + (index));
    let commentValue = commentInputRef.value.trim();

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
    renderComments(index)
    renderBooksTemplate();

    commentInputRef.value = "";
}