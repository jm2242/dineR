orderPlaced = React.createClass({
  render() {
  	//Meteor.call('textRemind');
  	Meteor.call('sendEmail',
    	'atsy314@gmail.com',
	    'atsy314@gmail.com',
	    'Hello from Meteor!',
     	'This is a test of Email.send (orderPlaced).');
  	let swipedMeal = meals.findOne({_id: this.props.params.mealId});
    return (
    	<div className="">
    		<h3>Your Order is on the way!</h3>
    		<h5>It will arrive in 15 minutes!</h5>
    		<div className="card container">
	          <div className="item item-body column">
	            <img className="full-image column" src={swipedMeal.image} />
	          </div>
	          <div className="item">
	            <h2>{swipedMeal.name}</h2>
	            <h3>{swipedMeal.restaurant}</h3>
	            <p>Order Total: {swipedMeal.price}</p>
	          </div>
	          <div className="item word-will-wrap">
	            <p>{swipedMeal.details}</p>
	          </div>
	        </div>
	    </div>
    )
}})