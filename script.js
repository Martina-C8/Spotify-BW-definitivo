const URLGHALI =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=ghali";

/* function search(prova) {
    
    let prova = document.getElementById("input").value
    return prova
} */

function prova(artist) {
  let artists = [
    "ghali",
    "eminem",
    "queen",
    "renatozero",
    "karmacoma",
    "ezrafurman",
  ];
  /* if(localStorage.getItem("artist") !== null) {
    artists = localStorage.getItem("artist")
  } */
  artists.forEach((artist) => {
    console.log(artist);
    URL =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist;

    getData().then((data) => {
      const ARTIST = document.getElementById("contentArtist");
      const ALBUM = document.getElementById("contentAlbum");
      data.data.slice(0, 1).forEach((element) => {
        ARTIST.innerHTML += `<div class="col-12 col-sm-6 col-md-3 col-lg-2" id="artist">
                <img src="${element.artist.picture_medium}" id="artistImage">
            </div>`;

        ALBUM.innerHTML += 
        `<div class="col-12 col-sm-6 col-md-3 col-lg-2" id="album">
            <img src="${element.album.cover_medium}" id="albumImage">
        </div>`;

        /* let IMG = document.createElement("img")
            IMG.src = element.artist.picture_medium
            IMG.className = "col-12 col-sm-6 col-md-3 col-lg-2"
            ARTIST.appendChild(IMG) */
      });
    });
  });
}

/* window.onload = function() {
    prova('ghali');
    //document.querySelector("#search").addEventListener("click");
}; */

const getData = async () => {
  const data = await fetch(URL, {});
  const response = await data.json();
  //console.log(response)
  return response;
};

const getGhali = async () => {
  const data = await fetch(URLGHALI, {});
  const response = await data.json();
  console.log(response);
  return response;
};

document.addEventListener("DOMContentLoaded", () => {
  prova();
});
