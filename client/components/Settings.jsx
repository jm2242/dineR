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
    return <div className="">
        <div className="item item-divider">
          <h3>Choose your search filter</h3>
        </div>
          <ReactRouter.Link className="button button-bar" to={"/home/allItemsFilter"}>All Items</ReactRouter.Link>
          <ReactRouter.Link className="button button-bar" to={"/home/savedItemsFilter"}>Saved Items</ReactRouter.Link>
          <ReactRouter.Link className="button button-bar" to={"/home/restaurantSpecialsFilter"}>Restaurant Specials</ReactRouter.Link> 
      </div>
  }
});
