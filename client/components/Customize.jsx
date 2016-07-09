Customize = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let handle = Meteor.subscribe("meals")
    let data = meals.find({affirmative: true}).fetch()
    return {
      loading: !handle.ready(),
      users: data
    }
  },
  reset() {
    Meteor.call('reset')
  },
  render() {
  console.log(this.props);
  let swipedMeal = meals.findOne({_id: this.props.params.mealId});
    return (
      <div className="">
        <div className="item item-divider">
          <h1>Customize</h1>
        </div>
        <h2>{swipedMeal['name']}</h2>
         <p>Lettuce<input type="checkbox" value="Hello!" defaultChecked/></p>
         <p>Lettuce<input type="checkbox" value="Hello!" defaultChecked/></p>
         <p>Lettuce<input type="checkbox" value="Hello!" defaultChecked/></p>
         <p>Lettuce<input type="checkbox" value="Hello!" defaultChecked/></p>
        <div className="bar bar-footer bar-assertive">
          <ReactRouter.Link className="button button-bar" to={"/"}>Order  
            <span className = "icon ion-arrow-right-a"></span>
          </ReactRouter.Link>
        </div>
      </div>
    )
  }
});

  // meals.insert({
  //   name: "California Roll",
  //   restaurant: "Miyagi Mansion",
  //   image: "http://www.mnpr.biz/wp-content/uploads/2012/12/California-Roll-1.jpg",
  //   details: "Sushi made only with the dankest of fake crab",
  //   price: "$8.99",
  //   rating: 4.5,
  //   mealOptions: {"Soy Sauce" : true, "Wasabi" : true, "Pickeled Ginger" : true}
  // })