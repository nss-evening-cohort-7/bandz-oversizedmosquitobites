
function writeToDom(domString, domId){
  if (document.getElementById(domId)){
    var myDiv = document.getElementById(domId);
    myDiv.innerHTML = domString;
  }
}
// array of objects for discog page
var discog = [
  {
    title: "Basement Bugs",
    releaseYear: 1999,
    coverArtImg: "/img/albums/basementbugs.png",
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
    coverArtImg: "/img/albums/ifeelsosmall.png",
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
    coverArtImg: "/img/albums/malarious.png",
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


//merch page 
var products = [
  { name:"Socks",
    size: ['S', 'M', 'L', 'XL' ],
    description: "Keep your feet away from mosquito bites!",
    imageURL:"https://image.spreadshirtmedia.com/image-server/v1/mp/products/P18092423MPC25332326/views/1,width=378,height=378,appearanceId=1,backgroundColor=E8E8E8,version=1497265829/buzz-mosquito-me",
    price: "$3.99" ,
   
  },

  { name:"Hoodie",
  size: ['S', 'M', 'L', 'XL'],
  description: "Cover your head with a mosquito hoodie to avoid mosquito bite!",
  imageURL:"http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg",
  price: "$8.99" ,
},

{ name:"Tshirt",
  size: ['S', 'M', 'L', 'XL'],
  description: "Show off your buzz with our buzz Tshirt!",
  imageURL:"http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg",
  price: "$6.99" ,
},

{ name:"Hat",
  size: ['S', 'M', 'L', 'XL'],
  description: "Rock and Roll with our Mosquito Hats On!",
  imageURL:"http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg",
  price: "$4.99" ,
}
]


function createMerchCard(){
  var merchProject ="";
  for (var p = 0; p < products.length; p++) {
     merchProject += "<div class = 'display-card'>"
      merchProject += "<img  class ='img-merch' src= " + products[p].imageURL + ">";
      merchProject  += "<div class='merchCard'>";
      merchProject += "<h1>" + products[p].name + "</h1>";
      merchProject += "<h3>" + products[p].size.join(' ')+ "</h3>";
      merchProject += "<p>" + products[p].description + "</p>";
      merchProject += "<h3>" + products[p].price + "</p>";
      merchProject += "</div>";
      merchProject += "</div>";
    }  
    writeToDom(merchProject, "merch-page");

}
createMerchCard();


// members page
var members = [
{ name:"MOE SKEETO",
imageURL:"/img/members/moeskeeto.png",
bio:"Q: What do you call someone who hangs around with musicians? <br> A: A singer",
floats:true,
role:"Lead Singer"
},
{ name:"BUCK ZAPPA",
imageURL:"/img/members/buckzappa.png",
bio:"Q: What's worse than telling jokes about guitarists? <br> A: Laughing at 'em",
role:"Lead guitar"
},
{ name:"DJ FIREFLY",
imageURL:"/img/members/djfirefly.png",
bio:"A guy wanted to play bass in a band. The band told him, 'Okay, but you will  have to have 1/3 of your brain removed.' So the guy went into surgery. When he  woke up, the doctor said, 'I'm terribly sorry, but we made a mistake and  accidentally removed 3/4's of your brain instead. You're now a drummer'.",
floats:true,
role:"Drums"
},
{ name:"RAID CHARLES",
imageURL:"/img/members/raidcharles.png",
bio:"Q: Why is the piano used in bands? <br> A: So musicians have a place to put their beers.",
role:"Keys"
}
];

function createProjectCards() {
  var string = "";
  for (var i = 0; i < members.length; i++) {
      string += "<div class='item'>";
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