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