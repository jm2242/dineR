Settings = React.createClass({
  handleChange: function(event) {
    this.setState({filterOptions: event.target.value})
  },
  componentDidMount: function () {
    $(document).ready( function() {
      settingsFilter = $("[name='Filter Option']:checked").val();
    });
  },
  render() {
    let settingsFilter = ""
    return (
      <div className="list list-view">
        <div className="bar bar-head bar-stable">
          <h2 className="title">Choose your search filter</h2>
          <br></br>
        </div>
        <div>
          <br></br>
          <br></br>
          <ReactRouter.Link className="button button-bar" to={"/home/allItemsFilter"}>All Items</ReactRouter.Link>
          <ReactRouter.Link className="button button-bar" to={"/home/savedItemsFilter"}>Saved Items</ReactRouter.Link>
          <ReactRouter.Link className="button button-bar" to={"/home/restaurantSpecialsFilter"}>Restaurant Specials</ReactRouter.Link> 
        </div>
      </div>
    )
  }
});
