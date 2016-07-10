
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
sendConfirmation(){
	Meteor.call('sendEmail',
	            'atsy314@gmail.com',
	            'atsy314@gmail.com',
	            'Hello from Meteor!',
	            'This is a test of Email.send.');
	},
  reset() {
    Meteor.call('reset')
  },
  render() {
	  return (
	  	<div>
		  	<div className= "buttons">
				<ReactRouter.Link clickHandler={this.sendConfirmation} className="button button-block button-assertive" to={"/orderPlaced/" + this.props.params.mealId}>Delivery</ReactRouter.Link>
				<ReactRouter.Link clickHandler={this.sendConfirmation} className="button button-block button-calm" to={"/orderPickup/" + this.props.params.mealId}>Pick Up</ReactRouter.Link>
			</div>
		</div>
	  	)
	}
});