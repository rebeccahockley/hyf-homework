let displayGifs = document.getElementById("displayGifs");

function searchGifs() {
  displayGifs.innerHTML = " ";
  let searchWord = document.getElementById("searchword").value;
  let limitGifNumber = document.getElementById("noOfGifs").value;
  if (searchWord == 0 || searchWord == " ") {
    displayGifs.innerHTML = "Please enter a search word to search for gifs";
  } else if (limitGifNumber == 0) {
    displayGifs.innerHTML = "Please enter a number to limit the amount of gifs";
  } else {
    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=GCDZcMQpPFDqYTrGxqLYRsTJGzXwIEOb&q=${searchWord}&limit=${limitGifNumber}`
    )
      .then((response) => response.json())
      .then((gifsToDisplay) => {
        for (let i = 0; i < limitGifNumber; i++) {
          displayGifs.innerHTML += `<img src="${gifsToDisplay.data[i].images.fixed_width.url}"><br>`;
        }
      });
  }
}
