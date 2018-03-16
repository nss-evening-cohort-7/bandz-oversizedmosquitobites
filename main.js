console.log("hello world!");

function writeToDom(domString, domId){
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML = domString;
}

//merch page 
var products = [
  { name:"Socks",
    size: ['S', 'M', 'L', 'XL' ],
    description: "Keep your feet away from mosquito bites",
    imageURL:"https://image.spreadshirtmedia.com/image-server/v1/mp/products/P18092423MPC25332326/views/1,width=378,height=378,appearanceId=1,backgroundColor=E8E8E8,version=1497265829/buzz-mosquito-me",
    price: "$2.99" ,
    float: true,
  },

  { name:"Hoodie",
  size: ['S', 'M', 'L', 'XL'],
  description: "cover your head to avoid mosquito bite",
  imageURL:"http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg",
  price: "$7.99" ,
},

{ name:"Tshirt",
  size: ['S', 'M', 'L', 'XL'],
  description: "show off your buzz with our buzz Tshirt",
  imageURL:"http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg",
  price: "$5.99" ,
  float: true,
},

{ name:"Hat",
  size: ['S', 'M', 'L', 'XL'],
  description: "TLike the look of our hat?",
  imageURL:"http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg",
  price: "$4.99" ,
}
]


function createMerchCard(){
  for (var p = 0; p < products.length; p++) {
      //  var merchProject ="";
      // //    if( products[p].float ==true) 
      // // {
      // //     merchProject += "<div class = 'display-card float-right'>";
      // // } else {
      // //     merchProject += "<div class = 'display-card float-left'>";
      // // }
  
      var merchProject ="<div class = 'dispaly-card'>";
  
      merchProject += "<img  class ='img-merch' src= " + products[p].imageURL + ">";
      merchProject  += "<div class='merchCard'>";
      if( products[p].float ==true) 
      {
          merchProject += "<div class = 'float-right'>";
      } else {
          merchProject += "<div class = 'float-left'>";
      }
      merchProject += "<h1>" + products[p].name + "</h1>";
      

      merchProject += "<h3>" + products[p].size.join(' ')+ "</h3>";
  

      merchProject += "<p>" + products[p].description + "</p>";
      merchProject += "</div>";
      
      merchProject += "</div>";
      writeToDom(merchProject, 'merch-page');
  }  

}

createMerchCard();

