orderPickup = React.createClass({
  render() {
    let swipedMeal = meals.findOne({_id: this.props.params.mealId});
    submittedOrders.insert({
    	customerName: "Logan",
    	customerLocation: "2346",
    	meal: swipedMeal.name,
    	delivered: false,
    	orderPrice: swipedMeal.price,
    	orderMethod: "pick up"
    })

    return (
    	<div className="">
    		<h3>Your Order has been placed!</h3>
    		<h5>It will be ready in 6 minutes!</h5>
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