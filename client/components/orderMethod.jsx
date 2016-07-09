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
		  	<div className= "buttons">
				<ReactRouter.Link className="button button-block button-assertive" to={"/orderPlaced"}>Delivery</ReactRouter.Link>
				<ReactRouter.Link className="button button-block button-calm" to={"/orderPickup"}>Pick Up</ReactRouter.Link>
			</div>
		</div>
	  	)
	}
});