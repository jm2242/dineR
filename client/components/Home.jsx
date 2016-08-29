React.initializeTouchEvents(true)
// Add listener to get :active pseudoselector working. hack
document.addEventListener("touchstart", function(){}, false)

Home = React.createClass({
  mixins: [ReactMeteorData],
  contextTypes: {router: React.PropTypes.object.isRequired},
  getMeteorData() {
    let handle = Meteor.subscribe("meals")
    let newMeal = [meals.findOne( { affirmative: { $ne: true }})]
    if (this.props.params.filterOption === "allItemsFilter") {
       newMeal = [meals.findOne( {affirmative: { $ne: true }})]
    } else if (this.props.params.filterOption === "savedItemsFilter") {
       newMeal = [savedMeals.findOne()]
    } else if (this.props.params.filterOption === "restaurantSpecialsFilter") {
       newMeal = [specialMeals.findOne()]
    }
  return {
      loading: !handle.ready(),
      newMeal: newMeal,
    }
  },
  removeCard(_id) {
  if (this.props.params.filterOption === "savedItemsFilter") {
    savedMeals.remove(_id)
  } else {
    meals.remove(_id)
  }
    //Meteor.call("repopulate")
  },
  updateCard(_id) {
    meals.update({_id}, {$set: { affirmative: true}});
    // savedMeals.insert(this.data.newMeal[0])
  },
  orderItem(_id) {
    meals.update({_id}, {$set: { affirmative: true}})
    //Meteor.call("repopulate");
    this.context.router.transitionTo('/customize' +'/' + _id);
  },
  saveItem(_id) {
    meals.update({_id}, {$set: { affirmative: true}})
    savedMeals.insert(this.data.newMeal[0])
  },
  orderButtonClicked(e) {
    e.preventDefault()
    this.setState({
        x: 1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
      //Add to favorites list
      Meteor.setTimeout(this.orderItem(this.data.newMeal[0]._id), 500)
  },
  xButtonClicked(e) {
    e.preventDefault()
    this.setState({
        x: -1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
      Meteor.setTimeout(this.removeCard(this.data.newMeal[0]._id), 500)
  },
  clickSavedMeal(e) {
    e.preventDefault()
    this.setState({
        x: 0,
        y: -1000,
        dragging: "all 0.5s ease"
      })
    Meteor.setTimeout(this.saveItem(this.data.newMeal[0]._id), 500);

  },
  renderCards() {
    return this.data.newMeal
      .map((card) => {
        return <Card
          key={card._id}
          card={card}
          remove={ () => this.removeCard(card._id)}
          orderItem={ () => this.orderItem(card._id)}
          saveItem={ () => this.saveItem(card._id)}
        ></Card>
    })
  },
  render() {
    if (this.data.loading) {
      return <AppLoading></AppLoading>
    }
    return <div>
            {this.renderCards()}
            <h4> If you're on desktop, please view this using mobile view, which you can enable with the
            Chrome Developer Tools</h4>
            <div className="float-bottom button-bar">
              <MyButton clickHandler={this.xButtonClicked} buttonClass="button button-block button-assertive icon ion-close-round" /> 
              <MyButton clickHandler={this.clickSavedMeal} buttonClass="button button-block button-calm icon ion-ios-star header-icon" />   
              <MyButton clickHandler={this.orderButtonClicked} buttonClass="button button-block button-balanced icon ion-checkmark-round" />
            </div>
           </div>
  }
})