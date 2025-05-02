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

    renderBooksTemplate();
    saveToLocalStorage();
}

