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


// function renderCommentsAfterSave(index) {
//     let commentsRef = document.getElementById('comments' + (index))
//     if (!commentsRef) return;

//     let comments = books[index].comments;

//     if (!comments || comments.length === 0) {
//         commentsRef.innerHTML = `<p>Schreibe den ersten Kommentar!</p>`;
//         return;
//     }

//     let commentsHTML = "";
//     for (let commentObj of comments) {
//         commentsHTML += `
//                 <div class="comments_field">
//                     <p class="left">${commentObj.name}:</p>
//                     <p class="right">${commentObj.comment}</p>
//                 </div>`;
//     }
//     commentsRef.innerHTML = commentsHTML;
// }



