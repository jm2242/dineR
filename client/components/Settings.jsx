Settings = React.createClass({
  this.state = {
    filterOptions: "allItems"
  },
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

         <p><input type="radio" id="filter" name="Filter Option" value="allItems" defaultChecked>All Items</input></p>
         <p><input type="radio" id="filter" name="Filter Option" value="savedtems">Saved Items</input></p>
         <p><input type="radio" id="filter" name="Filter Option" value="restaurantSpecials">Restaurant Specials</input></p>
        <div className="bar bar-footer bar-assertive">
          <ReactRouter.Link className="button button-bar" to={"/home" + '/' + document.getElementById('filter')}>APPLY FILTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
            <span className = "icon ion-arrow-right-a"></span>
          </ReactRouter.Link>
        </div>
      </div>
  }
});
