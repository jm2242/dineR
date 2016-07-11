var sent = false;
orderPickup = React.createClass({
  getInitialState() {
    return {
      time: 0
    }
  },	
  componentDidMount: function () {
    let swipedMeal = meals.findOne({_id: this.props.params.mealId}) || 
                     savedMeals.findOne({_id: this.props.params.mealId}) ||
                     specialMeals.findOne( {_id: this.props.params.mealId});
    
    var self = this;
    var restaurantLocation = swipedMeal.location;
    navigator.geolocation.getCurrentPosition(function (currentLocation) {
	    var originStr = currentLocation.coords.latitude + ',' + currentLocation.coords.longitude;
	    var destinationStr = restaurantLocation.latitude + ',' + restaurantLocation.longitude;
	    var query = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + originStr + '&destinations=' + destinationStr;

	    Meteor.call('getDistance', query, function successCallback(error, result) {
	        if(error) {          
	            $('.timer').hide()
	        }
	        var jsonResult = JSON.parse(result)
	        self.setState({
	          time: parseInt(jsonResult.rows[0].elements[0].duration.text) * 60000
	        })
	        var a = $('.timer')
	        $('.timer').show()
	      });
    }, function errorCallback() {
		$('.timer').hide()
    })
  },
  render() {
 	let swipedMeal = meals.findOne({_id: this.props.params.mealId}) || 
	                 savedMeals.findOne({_id: this.props.params.mealId}) ||
	                 specialMeals.findOne( {_id: this.props.params.mealId});
  	if (!sent){


	    submittedOrders.insert({
	    	customerName: "Logan",
	    	customerLocation: "2346",
	    	meal: swipedMeal.name,
	    	delivered: false,
	    	orderPrice: swipedMeal.price,
	    	orderMethod: "pick up"
	    })
	    //Meteor.call('textRemind',
	    //	   swipedMeal.name,
	    //	   swipedMeal.price,
	    //	   swipedMeal.restaurant);
	  	Meteor.call('sendEmail',
		      'atsy314@gmail.com',
		      'atsy314@gmail.com',
		      'Hello from Meteor!',
	       	  'This is a test of Email.send (orderPickup).',
	    	   swipedMeal.name,
	           swipedMeal.price,
	    	   swipedMeal.restaurant);
	  	sent = true;
	  }
	  else{
	  	sent = false;
	  }

    return (
    	<div className="">
    		<h3 className="title">Your Order has been placed!</h3>
    		<CountdownTimer initialTimeRemaining={this.state.time} hidden/>
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