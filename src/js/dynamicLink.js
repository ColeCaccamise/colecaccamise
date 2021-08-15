const getLink = function(link) {
    document.querySelector('.video-link').href = link;
    let videoURL = link.slice(-11);

    let vidContainer = document.querySelector('.vid-container');
    let embedMarkup = `
    <iframe src="https://www.youtube.com/embed/${videoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
    `;

    vidContainer.innerHTML += embedMarkup;
}

// Cole - Enter new video link here
getLink('https://youtu.be/ZK0ITdQ-wXo');

// const addLink = function(url, title, desc) {
//     let markup = `
//     <div class="link">
//         <a href="${url}">
//             <h3>${title}</h3>
//             <p>${desc}</p>
//         </a>
//     </div> 
//     `;

//     document.querySelector('.links__card').innerHTML += markup;
// }

// // Cole - add new links here

// addLink('https://youtube.com/c/colecaccamise', 'YouTube', 'Tech videos');

