Card = React.createClass({
  getInitialState() {
    return {
      x: 0,
      y: 0,
      initialX: 0,
      initialY: 0,
      dragging: "none"
    }
  },
  componentDidMount: function () {
    $.fn.stars = function() {
      return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
      });
    } 
    $(function() {
      $('span.stars').stars();
    });
  },
  clickSavedMeal(e) {
    e.preventDefault()
    this.setState({
        x: 0,
        y: -1000,
        dragging: "all 0.5s ease"
      })
    Meteor.setTimeout(this.props.remove, 500)
    savedMeals.insert(this.props.card)
  },
  moveCardInit(e) {
    e.preventDefault();
    this.setState({
      initialX: e.touches[0].pageX,
      initialY: e.touches[0].pageY,
      dragging: "none"
    })
  },
  moveCard(e) {
    e.preventDefault()
    deltaX = (e.touches[0].pageX - this.state.initialX)
    deltaY = (e.touches[0].pageY - this.state.initialY)
    this.setState({
      x: deltaX,
      y: deltaY
    })
  },
  orderButtonClicked(e) {
    e.preventDefault()
    this.setState({
        x: 1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
      //Add to favorites list
      Meteor.setTimeout(this.props.orderItem, 500)
  },
  xButtonClicked(e) {
    e.preventDefault()
    this.setState({
        x: -1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
      Meteor.setTimeout(this.props.remove, 500)
  },
  moveCardEnd(e) {
    e.preventDefault()
    if (e.changedTouches[0].pageX < 50) {
      this.setState({
        x: -1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
      savedMeals.insert(this.props.card)
      Meteor.setTimeout(this.props.remove, 500)
    } else if (e.changedTouches[0].pageX > (window.innerWidth - 50)) {
      this.setState({
        x: 1000,
        y: 0,
        dragging: "all 0.5s ease"
      })
      //Add to favorites list
      Meteor.setTimeout(this.props.orderItem, 500)
    } else {
      this.setState({
        x: 0,
        y: 0,
        dragging: "all 0.5s ease"
      })
    }
  },
  handleFunc(e) {
    e.preventDefault()
  },
  render() {
    let cardStyle = {
      transform: "translate(" +
        this.state.x + "px," +
        this.state.y + "px)" +
        " rotate("+this.state.x/10 + "deg)",
      transition: this.state.dragging,
      WebkitTransform: "translate(" +
        this.state.x + "px," +
        this.state.y + "px)" +
        " rotate("+this.state.x/10 + "deg)",
      WebkitTransition: this.state.dragging
    }
    if (this.state.x <= -1000 || this.state.x >= 1000) {
      cardStyle.marginBottom = "-" + (document.getElementsByClassName("card")[0].offsetHeight + 20) + "px"
    }
    return (
      <div className="">
        <div className="card container" onTouchStart={this.moveCardInit} onTouchMove={this.moveCard} onTouchEnd={this.moveCardEnd} style={cardStyle}>
          <div className="item item-body column">
            <img className="full-image column" src={this.props.card.image} />
          </div>
          <div className="item">
            <h2>{this.props.card.name}</h2>
            <h3>From: {this.props.card.restaurant}</h3>
            <p>{this.props.card.price}</p>
            <span className="stars">{this.props.card.rating}</span>
            <p>1.2 miles</p>
          </div>
          <div className="item word-will-wrap">
            <p>{this.props.card.details}</p>
          </div>
        </div>
      </div>
    )
  }
});
