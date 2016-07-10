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
       newMeal = [savedMeals.findOne( {affirmative: { $ne: true }})]
    } else if (this.props.params.filterOption === "restaurantSpecialsFilter") {
      //Fix this
    }
  return {
      loading: !handle.ready(),
      newMeal: newMeal,
    }
  },
  removeCard(_id) {
    meals.remove(_id)
    //Meteor.call("repopulate")
  },
  orderItem(_id) {
    meals.update({_id}, {$set: { affirmative: true}})
    //Meteor.call("repopulate");
    this.context.router.transitionTo('/customize' +'/' + _id);
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
    Meteor.setTimeout(this.removeCard(this.data.newMeal[0]._id), 500)
    savedMeals.insert(this.data.newMeal[0])
  },
  renderCards() {
    return this.data.newMeal
      .map((card) => {
        return <Card
          key={card._id}
          card={card}
          remove={ () => this.removeCard(card._id)}
          orderItem={ () => this.orderItem(card._id)}
        ></Card>
    })
  },
  render() {
    if (this.data.loading) {
      return <h1>Loading</h1>
    }
    return <div>
            {this.renderCards()}
            <div className="float-bottom button-bar">
              <MyButton clickHandler={this.xButtonClicked} buttonClass="button button-block button-assertive icon ion-close-round" /> 
              <MyButton clickHandler={this.clickSavedMeal} buttonClass="button button-block button-calm icon ion-heart" />   
              <MyButton clickHandler={this.orderButtonClicked} buttonClass="button button-block button-balanced icon ion-checkmark-round" />
            </div>
           </div>
  }
})