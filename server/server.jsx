Meteor.publish("myData", function() {
  return MyData.find()
})

populate = function() {
  
  MyData.insert({
    name: "Pepperoni Pizza",
    restaurant: "Pizza Place",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza with pepperoni",
    price: "$10.99",
    rating: 3.6,
    mealOptions: {"Extra Cheese" : false, "Sausage" : false, "Pepper" : false, "Onions" : false, "Olives" : false}

  })
  MyData.insert({
    name: "California Roll",
    restaurant: "Miyagi Mansion",
    image: "http://www.mnpr.biz/wp-content/uploads/2012/12/California-Roll-1.jpg",
    details: "Sushi made only with the dankest of fake crab",
    price: "$8.99",
    rating: 4.5,
    mealOptions: {"Soy Sauce" : true, "Wasabi" : true, "Pickeled Ginger" : true}
  })
  MyData.insert({
    name: "Chinese Fried Rice",
    restaurant: "Asian Place",
    image: "http://beautifycorner.com/wp-content/uploads/2015/02/chinese_fried_rice-1024x683.jpg",
    details: "Dank rice, dank peas and normal carrots ",
    price: "$5.99",
    rating: 3.1,
    mealOptions: {"Peas" : true, "Carrots" : true, "Beef" : true, "Chicken" : false, "Shrimp" : false}

  })
  MyData.insert({
    name: "Beef Burrito",
    restaurant: "Picante Queso",
    image: "http://www.tacobueno.com/media/1381/beefbob.png?quality=65",
    details: "A dank Burrito from the dankest kitchen",
    price: "$7.99",
    rating: 4.5,
    mealOptions: {"Guacomole" : false, "Salsa" : false, "Sour Cream" : false}

  })
  MyData.insert({
    name: "Vanilla Ice Cream",
    restaurant: "Creamy Treats",
    image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/4/5/2/FNM_050112-Ted-Farmers-Market-001_s4x3.jpg.rend.sniipadlarge.jpeg",
    details: "Dank cream with dank flavor",
    price: "$4.99",
    rating: 4.7,
    mealOptions: {"Chocolate Chips" : false, "Waffle Cone" : false, "Caramel" : false}

  })
  MyData.insert({
    name: "Lemon-Pepper Salmon",
    restaurant: "Salmon Sanctuary",
    image: "http://recipegreat.com/images/lemon-pepper-salmon-04.jpg",
    details: "Salmon that climbed the waterfall to dankhood",
    price: "$13.99",
    rating: 4.3,
    mealOptions: {}

  })
  MyData.insert({
    name: "Nachos Supreme",
    restaurant: "Mexican Magic",
    image: "http://uvmbored.com/wp-content/uploads/2016/02/Urban_Nachos1.jpg",
    details: "Delicious nachos filled with various toppings. Dank.",
    price: "$6.99",
    rating: 3.9,
    mealOptions: {"Salsa" : true, "Cheese" : true, "Beef" : true, "Guacamole" : false, "Jalapeno" : false}

  })
  MyData.insert({
    name: "Tiramisu",
    restaurant: "Competent Confections",
    image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.sni12col.landscape.jpeg",
    details: "A creamy and dank cake",
    price: "$19.99",
    rating: 4.7,
    mealOptions: {}


  })
  MyData.insert({
    name: "Udon Soup",
    restaurant: "City Wok",
    image: "http://atmedia.imgix.net/ca703b173c62c00aaf94aeefa4eb4715203a4597?w=800.0&fit=max",
    details: "A dank soup with the dankest noodles",
    price: "$8.99",
    rating: 4.0,
    mealOptions: {"Eggs" : true}

  })
  MyData.insert({
    name: "Ham and Cheese Omlet",
    restaurant: "No Finer Diner",
    image: "http://www.incredibleegg.org/wp-content/uploads/ham_cheese_omelette_930x5502-930x550.jpg",
    details: "Some dank eggs and ham plus cheese",
    price: "$7.99",
    mealOptions:{"Ham" : true, "Cheese" : true, "Green Onions" : true}

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza",
    price: "$10.99"

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza",
    price: "$10.99"

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza",
    price: "$10.99"

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza",
    price: "$10.99"

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza",
    price: "$10.99"

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza",
    price: "$10.99"

  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich",
    price: "$10.99"

  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger",
    price: "$10.99"

  })
}

Meteor.startup(function() {
  populate()
})

Meteor.methods({
  repopulate: function() {
    MyData.insert({
      name: "Bruh",
      image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
      details: "I ran out of food ideas"
    })
  },
  reset: function() {
    MyData.remove({affirmative: true});
  }
})
