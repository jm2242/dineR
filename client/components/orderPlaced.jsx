orderPlaced = React.createClass({
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
    navigator.geolocation.getCurrentPosition(function successCallback(currentLocation) {
      var originStr = currentLocation.coords.latitude + ',' + currentLocation.coords.longitude;
      var destinationStr = restaurantLocation.latitude + ',' + restaurantLocation.longitude;
      var query = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + originStr + '&destinations=' + destinationStr;

      Meteor.call('getDistance', query, function(error, result) {
          if(error) {
            $('.timer').hide()
          }
          var jsonResult = JSON.parse(result)
          self.setState({
            time: parseInt(jsonResult.rows[0].elements[0].duration.text) * 60000
          })
          $('.timer').show()
        });
    }, function errorCallback(error) {
      $('.timer').hide()
    });
  },
  render() {
 	let swipedMeal = meals.findOne({_id: this.props.params.mealId}) || 
	                 savedMeals.findOne({_id: this.props.params.mealId}) ||
	                 specialMeals.findOne( {_id: this.props.params.mealId});

	submittedOrders.insert({
		customerName: "Logan",
		customerLocation: "2346",
		meal: swipedMeal.name,
		delivered: false,
		orderPrice: swipedMeal.price,
		orderMethod: "Delivery",
		dateOrdered: moment().calendar()
	});
	  // send text
	Meteor.call('textRemind',
		   swipedMeal.name,
		   swipedMeal.price,
		   swipedMeal.restaurant);
	Meteor.call('sendEmail',
		  'atsy314@gmail.com',
		  'atsy314@gmail.com',
		  'Hello from Meteor!',
		  'This is a test of Email.send (orderPickup).',
		   swipedMeal.name,
		   swipedMeal.price,
		   swipedMeal.restaurant);

    return (
    	<div className="">
    		<div className="card">
                <div className="item item-divider no-items-title">
                    Your Order Is On The Way!
                </div>
                <div className="item item-text-wrap no-items-text">
                    You will receive a confirmation email and text shortly. Thanks for ordering!
                </div>
                <CountdownTimer initialTimeRemaining={this.state.time} hidden/>
            </div> 
    		<div className="card container">
	          <div className="item item-body column imgFinal">
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