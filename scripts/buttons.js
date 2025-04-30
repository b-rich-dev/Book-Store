function toggleLikeButton(index) {
    document.getElementById(`heart${index}`)?.classList.toggle('like_button_pressed');
}


function toggleLikeButtonOnClick(index) {
    let book = books[index];
    document.getElementById('heart' + index)?.classList.toggle('like_button_pressed');

    if (!book.liked) {
        book.likes++;
        book.liked = true;
    }
    else {
        book.likes--;
        book.liked = false;
    }

    const likesRef = document.getElementById('likes' + index);
    if (likesRef) {
        likesRef.textContent = book.likes;
    }

    renderBooksTemplate()
    saveToLocalStorage();
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


