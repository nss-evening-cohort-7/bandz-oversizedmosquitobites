function writeToDom(domString, domId){
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML = domString;
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
      writeToDom(merchProject, "merch-page");
  }  

}
createMerchCard();



var members = [
{ name:"MOE SKEETO",
imageURL:"https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b194c1e4a335e5b642ff06d08012ccaa&auto=format&fit=crop&w=1050&q=80",
bio:"Q: What do you call someone who hangs around with musicians? <br> A: A singer",
floats:true,
role:"Lead Singer"
},
{ name:"BUCK ZAPPA",
imageURL:"https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8039fcdf672e95857084963e203fd44&auto=format&fit=crop&w=1050&q=80",
bio:"Q: What's worse than telling jokes about guitarists? <br> A: Laughing at 'em",
role:"Lead guitar"
},
{ name:"DJ FIREFLY",
imageURL:"https://images.unsplash.com/photo-1518553550601-d817bf328722?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79f197a0a8162599df49dc78fe20c1fc&auto=format&fit=crop&w=1050&q=80",
bio:"A guy wanted to play bass in a band. The band told him, 'Okay, but you will  have to have 1/3 of your brain removed.' So the guy went into surgery. When he  woke up, the doctor said, 'I'm terribly sorry, but we made a mistake and  accidentally removed 3/4's of your brain instead. You're now a drummer'.",
floats:true,
role:"Drums"
},
{ name:"RAID CHARLES",
imageURL:"https://images.unsplash.com/photo-1497342860825-91ff79bb8a7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=090b8385e1feaba89750ebd13745d100&auto=format&fit=crop&w=1050&q=80",
bio:"Q: Why is the piano used in bands? <br> A: So musicians have a place to put their beers.",
role:"Keys"
}
];

function createProjectCards(){
  for(var i=0; i<members.length; i++){
    var string = "";
    if (members[i].floats==true){
    string += "<div class='floatLeft'>";
    } else {
       string += "<div class='floatRight'>";
    }
    string += "<img class='img-members' src="+members[i].imageURL+">";
    string += "<h2 class='header-members'>" + members[i].name + "</h2>";
    string += "<h3 class='header-members'>" + members[i].role + "</h3>";
    string += "<p>" + members[i].bio + "</p>";
    string += "</div>";
    writeToDom(string, "members-string");
  }
}
createProjectCards();
