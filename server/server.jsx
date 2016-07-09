Meteor.publish("myData", function() {
  return MyData.find()
})

populate = function() {
  
  MyData.insert({
    name: "Pizza",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "Some dank pizza"
  })
  MyData.insert({
    name: "Sandwich",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank pizza Sandwich"
  })
  MyData.insert({
    name: "Cheeseburger",
    image: "https://www.pizzahut.com/assets/w/tile/thor/Pepperoni_Lovers_Pizza.png",
    details: "A dank Cheeseburger"
  })
}

Meteor.startup(function() {
  populate()
})

Meteor.methods({
  repopulate: function() {
    return [MyData.findOne()]
  },
  reset: function() {
    MyData.remove({affirmative: true});
  }
})
