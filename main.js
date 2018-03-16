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
      "Livin' La Vida Cucaracha",
      "Lice Lice Baby",
      "King of Bloodful Drinking"
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
      "I Wrote This Song While Taking A Shower And When I Finished I Went To Turn Off The Water And Realized I Never Turned It On And The Water Was My Tears",
      "Flying Is The Most Fun A Girl Can Have Without Taking Her Clothes Off",
      "Girl's Not Prey"
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
      "I'm Making This Song Title Really Long So The List Will Flex Wrap",
      "Please Buy This Album I Don't Want To Have To Get A Real Job"
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

var members = [
  {
    name: "MOE SKEETO",
    imageURL: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b194c1e4a335e5b642ff06d08012ccaa&auto=format&fit=crop&w=1050&q=80",
    bio: "Q: What do you call someone who hangs around with musicians? <br> A: A singer",
    floats: true,
    role: "Lead Singer"
  },
  {
    name: "BUCK ZAPPA",
    imageURL: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8039fcdf672e95857084963e203fd44&auto=format&fit=crop&w=1050&q=80",
    bio: "Q: What's worse than telling jokes about guitarists? <br> A: Laughing at 'em",
    role: "Lead guitar"
  },
  {
    name: "DJ FIREFLY",
    imageURL: "https://images.unsplash.com/photo-1518553550601-d817bf328722?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79f197a0a8162599df49dc78fe20c1fc&auto=format&fit=crop&w=1050&q=80",
    bio: "A guy wanted to play bass in a band. The band told him, 'Okay, but you will  have to have 1/3 of your brain removed.' So the guy went into surgery. When he  woke up, the doctor said, 'I'm terribly sorry, but we made a mistake and  accidentally removed 3/4's of your brain instead. You're now a drummer'.",
    floats: true,
    role: "Drums"
  },
  {
    name: "RAID CHARLES",
    imageURL: "https://images.unsplash.com/photo-1497342860825-91ff79bb8a7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=090b8385e1feaba89750ebd13745d100&auto=format&fit=crop&w=1050&q=80",
    bio: "Q: Why is the piano used in bands? <br> A: So musicians have a place to put their beers.",
    role: "Keys"
  }
];

function createProjectCards() {
  var string = "";
  for (var i = 0; i < members.length; i++) {
    
    if (members[i].floats == true) {
      string += "<div class='floatLeft'>";
    } else {
      string += "<div class='floatRight'>";
    }
    string += "<img class='img-members' src=" + members[i].imageURL + ">";
    string += "<h2 class='header-members'>" + members[i].name + "</h2>";
    string += "<h3 class='header-members'>" + members[i].role + "</h3>";
    string += "<p>" + members[i].bio + "</p>";
    string += "</div>";
    writeToDom(string, "members-string");
  }
}


function checkCurrentPage() {
  if (document.getElementById("discography")) {
    populateDiscogPage(discog);
  } else if (document.getElementById("members-string")) {
    createProjectCards();
  }
}

checkCurrentPage();