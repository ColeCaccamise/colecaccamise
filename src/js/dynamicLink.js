const getLink = function (link) {
    document.querySelector('.video-link').href = link;
    let videoURL = link.slice(-11);

    let vidContainer = document.querySelector('.vid-container');
    let embedMarkup = `
    <iframe src="https://www.youtube.com/embed/${videoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
    `;

    vidContainer.innerHTML += embedMarkup;
}

// Cole - Enter new video link here

getLink('https://youtu.be/wxRzqtaTxKQ');
