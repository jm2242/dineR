React.initializeTouchEvents(true)
// Add listener to get :active pseudoselector working. hack
document.addEventListener("touchstart", function(){}, false)

savedItemsView = React.createClass({
  mixins: [ReactMeteorData],
  contextTypes: {router: React.PropTypes.object.isRequired},
  getMeteorData() {
    let handle = Meteor.subscribe("meals")
    let savedMealsList = [savedMeals.findOne({_id: this.props.params.mealId})];
    return {
      loading: !handle.ready(),
      savedMeals: savedMealsList
    }
  },
  removeCard(_id) {
    this.context.router.transitionTo('/savedItems')
  },
  orderItem(_id) {
    meals.update({_id}, {$set: { affirmative: true}})
    //Meteor.call("repopulate");
    this.context.router.transitionTo('/customize' +'/' + _id);
  },
  xButtonClicked(e) {
    e.preventDefault()
    this.setState({
        x: -1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
    Meteor.setTimeout(savedMeals.remove(this.data.savedMeals[0]._id), 500)
    this.context.router.transitionTo('/savedItems')
  },
  renderCards() {
    return this.data.savedMeals
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
    if(!this.data.savedMeals.length) {
      return <div>No Saved Meals</div>
    }
    return <div>
              {this.renderCards()}
              <MyButton clickHandler={this.xButtonClicked} buttonClass="button button-block button-assertive icon ion-close-round"> 
                Test button
              </MyButton>   
            </div>
  }
})
