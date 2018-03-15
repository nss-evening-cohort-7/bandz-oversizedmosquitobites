console.log("hello world!");

// array of objects for discog page
var discog = [
  {
    title: "Basement Bugs",
    releaseYear: 1999,
    coverArtImg: "",
    songs: [
      "Papa Roach Is Our Primary Influence",
      "Who Let The Bugs Out",
      "Under the Fridge",
      "Livin' La Vida Cucaracha"
    ]
  },
  {
    title: "I Feel So Small (The Emo Years)",
    releaseYear: 2006,
    coverArtImg: "",
    songs: [
      "I Slept With Someone In OMB And All I Got Was West Nile Virus",
      "I Bite Skins Not Tragedies",
      "Welcome To The Black Plague",
      "I Wrote This Song While Taking A Shower And When I Finished I Went To Turn Off The Water And Realized I Never Turned It On And The Water Was My Tears"
    ]
  },
  {
    title: "Malarious",
    releaseYear: 2013,
    coverArtImg: "",
    songs: [
      "I'm So Antsy",
      "Citronella Man",
      "Song Title Here",
      "I'm Making This Song Title Really Long So The List Will Flex Wrap"
    ]
  }
];

// card builder for discog page

function buildDiscogCard(album) {
  var albumCardString = '<div class="album">';
  albumCardString += '<h2 class="albumtitle">' + album.title + '</h2>';
  albumCardString += '<img src="' + album.coverArtImg + '" class="album-cover">';
  albumCardString += '<h5 class="releaseyear">' + album.releaseYear + '</h5>';
  albumCardString += '<ol class="songlist">';

  album.songs.forEach(function (song) {
    albumCardString += '<li>' + song + '</li>';
  });

  albumCardString += '</ol></div>';

  return albumCardString;
}

function populateDiscogPage(albumArray) {
  var discogString = albumArray.map(buildDiscogCard).join("");
  writeToDom(discogString, "discography");
}

// main writeToDom function -- needs one string of all content to be written

function writeToDom(domString, domId) {
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML = domString;
}
