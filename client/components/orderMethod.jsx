orderMethod = React.createClass({
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
	  return (
	  	<div>
	  		<div className="bar bar-head bar-stable">
	          <h2 className="title">You Choose!</h2>
	        </div>
	        <br></br>
	        <br></br>
		  	<div className= "buttons">
				<ReactRouter.Link className="button button-block button-assertive" to={"/orderPlaced/" + this.props.params.mealId}>Delivery</ReactRouter.Link>
				<ReactRouter.Link className="button button-block button-calm" to={"/orderPickup/" + this.props.params.mealId}>Pick Up</ReactRouter.Link>
			</div>
		</div>
	  	)
	}
});