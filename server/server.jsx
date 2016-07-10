Meteor.publish("meals", function() {
  return meals.find()
})
Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster@sandbox624ad9a11d5647ee82c00c84ff7b2ddf.mailgun.org:31984d87e9a154aff51093b79c45507e@smtp.mailgun.org:587';
})
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },

  textRemind: function(){
    var twilio = Meteor.npmRequire('twilio');
    var client = new twilio.RestClient('ACda538d3d65a75faa96fc5752ac7a45f1', '7dad8af0e0e7e81c322234833e398af0');
    client.sendMessage({

        to:'+19085009502', // Any number Twilio can deliver to
        from: '+19086529282', // A number you bought from Twilio and can use for outbound communication
        body: 'Test' // body of the SMS message

    }, function(err, responseData) { //this function is executed when a response is received from Twilio

        if (!err) { // "err" is an error received during the request, if any

            // "responseData" is a JavaScript object containing data received from Twilio.
            // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
            // http://www.twilio.com/docs/api/rest/sending-sms#example-1

            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."

        }
    });
}
});

populate = function() {
  
  meals.insert({
    name: "Pepperoni Pizza",
    restaurant: "Pizza Place",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza with pepperoni",
    price: "$10.99",
    rating: 3.6,
    location: {"latitude": 42.358597, "longitude":-71.062750},
    mealOptions: {"Extra Cheese" : false, "Sausage" : false, "Pepper" : false, "Onions" : false, "Olives" : false}
  })
  meals.insert({
    name: "California Roll",
    restaurant: "Miyagi Mansion",
    image: "http://www.mnpr.biz/wp-content/uploads/2012/12/California-Roll-1.jpg",
    details: "Sushi made only with the dankest of fake crab",
    price: "$8.99",
    rating: 4.5,
    location: {"latitude": 42.361597, "longitude": -71.0627},
    mealOptions: {"Soy Sauce" : true, "Wasabi" : true, "Pickeled Ginger" : true}
  })
  meals.insert({
    name: "Chinese Fried Rice",
    restaurant: "Asian Place",
    image: "http://beautifycorner.com/wp-content/uploads/2015/02/chinese_fried_rice-1024x683.jpg",
    details: "Dank rice, dank peas and normal carrots ",
    price: "$5.99",
    rating: 3.1,
    location: {"latitude": 42.362597, "longitude": -71.0617},
    mealOptions: {"Peas" : true, "Carrots" : true, "Beef" : true, "Chicken" : false, "Shrimp" : false}
  })
  meals.insert({
    name: "Beef Burrito",
    restaurant: "Picante Queso",
    image: "http://www.tacobueno.com/media/1381/beefbob.png?quality=65",
    details: "A dank Burrito from the dankest kitchen",
    price: "$7.99",
    rating: 4.5,
    location: {"latitude": 42.364597, "longitude": -71.0597},
    mealOptions: {"Guacomole" : false, "Salsa" : false, "Sour Cream" : false}
  })
  meals.insert({
    name: "Vanilla Ice Cream",
    restaurant: "Creamy Treats",
    image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/4/5/2/FNM_050112-Ted-Farmers-Market-001_s4x3.jpg.rend.sniipadlarge.jpeg",
    details: "Dank cream with dank flavor",
    price: "$4.99",
    rating: 4.7,
    location: {"latitude": 42.42597, "longitude": -71.0617},
    mealOptions: {"Chocolate Chips" : false, "Waffle Cone" : false, "Caramel" : false}
  })
  meals.insert({
    name: "Lemon-Pepper Salmon",
    restaurant: "Salmon Sanctuary",
    image: "http://recipegreat.com/images/lemon-pepper-salmon-04.jpg",
    details: "Salmon that climbed the waterfall to dankhood",
    price: "$13.99",
    rating: 4.3,
    location: {"latitude": 42.41597, "longitude": -71.117},
    mealOptions: {}
  })
  meals.insert({
    name: "Nachos Supreme",
    restaurant: "Mexican Magic",
    image: "http://uvmbored.com/wp-content/uploads/2016/02/Urban_Nachos1.jpg",
    details: "Delicious nachos filled with various toppings. Dank.",
    price: "$6.99",
    rating: 3.9,
    location: {"latitude": 42.40597, "longitude": -71.2317},
    mealOptions: {"Salsa" : true, "Cheese" : true, "Beef" : true, "Guacamole" : false, "Jalapeno" : false}
  })
  meals.insert({
    name: "Tiramisu",
    restaurant: "Competent Confections",
    image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.sni12col.landscape.jpeg",
    details: "A creamy and dank cake",
    price: "$19.99",
    rating: 4.7,
    location: {"latitude": 42.42597, "longitude": -71.0617},
    mealOptions: {}
  })
  meals.insert({
    name: "Udon Soup",
    restaurant: "City Wok",
    image: "http://atmedia.imgix.net/ca703b173c62c00aaf94aeefa4eb4715203a4597?w=800.0&fit=max",
    details: "A dank soup with the dankest noodles",
    price: "$8.99",
    rating: 4.0,
    location: {"latitude": 42.33531, "longitude": -71.039799},
    mealOptions: {"Eggs" : true}
  })
  meals.insert({
    name: "Ham and Cheese Omlet",
    restaurant: "No Finer Diner",
    image: "http://www.incredibleegg.org/wp-content/uploads/ham_cheese_omelette_930x5502-930x550.jpg",
    details: "Some dank eggs and ham plus cheese",
    price: "$7.99",
    location: {"latitude": 42.33597, "longitude": -71.2417},
    mealOptions:{"Ham" : true, "Cheese" : true, "Green Onions" : true}
  })
  meals.insert({
    name: "Strawberry Parfait",
    restaurant: "Fruity Fun",
    image: "https://foodimentaryguy.files.wordpress.com/2014/06/lohiscreations-com.jpg",
    details: "Strawberries from the dank fields and fresh yogurt",
    price: "$3.99",
    location: {"latitude": 42.32597, "longitude": -71.2529},
    mealOptions: {}
  })
  meals.insert({
    name: "White Chocolate Macadamia Nut Cookies",
    restaurant: "Sweet Treats",
    image: "http://canadianhometrends.com/wp-content/uploads/2014/04/white-choco-maca1.jpg",
    details: "Cookies for the dankest of children",
    price: "$5.99",
    location: {"latitude": 42.34097, "longitude": -71.067177},
    mealOptions: {}
 })
 meals.insert({
    name: "Pad See Ew",
    restaurant: "City Wok",
    image: "http://cdn2.recipetineats.com/wp-content/uploads/2014/06/Pad-See-Ew-Thai-Noodles_2-1.jpg",
    details: "A dank Pad See Ew",
    price: "$12.99",
    rating: 4.2,
    location: {"latitude": 42.34597, "longitude": -71.0740},
    mealOptions: {}
  })
  meals.insert({
    name: "Bacon", 
    restaurant: "Au Cheval",
    image: "http://auchevalchicago.com/wp-content/uploads/IMG_4780-2.jpg",
    details: "Bacon...Dank",
    price: "$4.99",
    rating: 5.0,
    location: {"latitude": 42.40587, "longitude": -71.2317},
    mealOptions: {"Crispy": false, "Extra Bacon": false}
  })
  meals.insert({
    name: "Bacon Cheeseburger",
    restaurant: "Au Cheval",
    image: "http://auchevalchicago.com/wp-content/uploads/new-burger.jpg",
    details: "A Bacon Cheeseburger with a Dank Egg",
    price: "$10.99",
    rating: 4.8,
    location: {"latitude": 42.40617, "longitude": -71.2367},
    mealOptions: {"Garlic Aioli": true, "Fried Egg": true, "Onion": true, "turkey burger": false }
  })
  meals.insert({
    name: "Orange and Fennel-Roasted Chicken",
    restaurant: "Orange Chicken Place",
    image: "https://rencooks.files.wordpress.com/2011/06/100_8544.jpg",
    details: "Chicken with Hint of Orange and Dank",
    price: "$11.99",
    rating: 4.3,
    location: {"latitude": 42.40617, "longitude": -71.2397},
    mealOptions: {}
  })
  meals.insert({
    name: "Brownie Pie",
    restaurant: "Sweet Sweet Sweet",
    image: "http://s3.favim.com/orig/40/brownie-cake-chocolate-delicious-food-Favim.com-335002.jpg",
    details: "Sweet Sweet Dank",
    price: "$6.99",
    rating: 4.1,
    location: {"latitude": 42.336676, "longitude": -71.072159},
    mealOptions: {}
  })
    meals.insert({
    name: "Barbeque Sauce Glazed Steak Tip",
    restaurant: "Meet my Meat",
    image: "http://www.freshmeatdirect.co.uk/ekmps/shops/stdnmeats/images/9-x-peppered-bbq-minute-steaks-special-offer--57-p.jpg",
    details: "Dank Glaze for a Dank Steak",
    price: "$17.99",
    rating: 4.4,
    location: {"latitude": 42.3407, "longitude": -71.054306},
    mealOptions: {}
  })
    meals.insert({
    name: "Grilled Pork Steaks",
    restaurant: "Porkys",
    image: "http://www.extraordinarybbq.com/wp-content/uploads/2012/05/DSC_0101.jpg",
    details: "We Double Dare you to find Danker Pork",
    price: "$13.99",
    rating: 4.2,
    location: {"latitude": 42.318400, "longitude": -71.102371},
    mealOptions: {}
  })
    meals.insert({
    name: "Spaghetti alla Carbonara",
    restaurant: "Sweet Sweet Sweet",
    image: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/5/9/1336579239372/Felicitys-perfect-spaghet-008.jpg",
    details: "Dank from Under the Tuscan Sun",
    price: "$11.99",
    rating: 4.9,
    location: {"latitude": 42.318400, "longitude": -71.102159},
    mealOptions: {"Extra Pecorino Romano": false}
  })
    meals.insert({
    name: "Eggplant Parmesan",
    restaurant: "We Ran Out Of Chicken",
    image: "http://www.cook-italian.com/.a/6a010535d7df4f970b0120a870799c970b-500pi",
    details: "Eggplant, Never Been a Danker Vegetable",
    price: "$8.99",
    rating: 3.9,
    location: {"latitude": 42.348856, "longitude": -71.066665},
    mealOptions: {"Extra Bread": false}
   })
    meals.insert({
    name: "Rigatoni alla Amatriciana",
    restaurant: "Italy Direct",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT90dPsVxT0yVG-nhMInqHtU0pUTHCHvYxqqI1VezDTt0M8UfKS",
    details: "Do You Even Know What Amatriciana Is, Cause It's Dank",
    price: "$11.99",
    rating: 4.7,
    location: {"latitude": 42.336676, "longitude": -71.072159},
    mealOptions: {"Extra Pecorino Romano": false}
   })
    meals.insert({
    name: "Mutha Fuckin Crunchwrap Supreme",
    restaurant: "T-Bell",
    image: "http://media2.popsugar-assets.com/files/2015/03/25/038/n/1922195/7c49bba7_edit_img_image_1090627_1427242408_Crunchwrap_Supreme_SQUARE/i/Taco-Bell-Crunchwrap-Supreme-Recipe.jpg",
    details: "A Dank-Ass Crunchwrap Supreme, Nuff Said",
    price: "$3.99",
    rating: 5.1,
    location: {"latitude": 42.378282, "longitude": -71.0364},
    mealOptions: {"Pefect As Is Or GTFO": true}
   })
    specialMeals.insert({
    name: "Metal Ice Cream for Rich People",
    restaurant: "Kanye's Dairy Farm",
    image: "http://i.dailymail.co.uk/i/pix/2012/05/10/article-2142399-1304C591000005DC-401_468x577.jpg",
    details: "Gold on My Chain, Gold on My Watch, Dank on my Ice Cream",
    price: "$1000.00",
    rating: 4.3,
    location: {"latitude": 42.33769, "longitude": -71.032333},
    mealOptions: {"Extra Gold": false, "Upgrade to Platinum": false}
   })
  meals.insert({
    name: "Disapointment in a Bag",
    restaurant: "Last Bag of Doritos in the Snack Bin",
    image: "https://consumermediallc.files.wordpress.com/2012/06/threechips.jpg",
    details: "You Had a Hankering for Doritos, Scumbag Steve Ate Them and Put Them Back",
    price: "$0.00",
    rating: 0.1,
    location: {"latitude": 42.260494, "longitude": -71.077652},
    mealOptions: {"Extra Disapointment": true, "Free Hate for Steve": true}
   })
}
Meteor.startup(function() {
  populate()
})
Meteor.methods({
  repopulate: function() {
    meals.insert({
      name: "Bruh",
      image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
      details: "I ran out of food ideas"
    })
  },
  reset: function() {
    meals.remove({affirmative: true});
  },
  getDistance: function(query) {
    var result = Meteor.http.call("GET", query);
    return result.content;
  }
})