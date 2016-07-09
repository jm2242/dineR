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
	              <MyButton buttonClass="button button-block button-assertive" buttonText="Delivery"/>
	              <MyButton buttonClass="button button-block button-calm" buttonText="Pick Up" />  
			</div>
		</div>
	  	)
	}
});