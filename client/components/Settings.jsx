Settings = React.createClass({
  render() {
    return <div className="">
        <div className="item item-divider">
          <h3>Choose your search filter</h3>
        </div>

         <p><input type="radio" name="Filter Option" value="All Items" defaultChecked>All Items</input></p>
         <p><input type="radio" name="Filter Option" value="Saved Items">Saved Items</input></p>
        <div className="bar bar-footer bar-assertive">
          <ReactRouter.Link className="button button-bar" to={"/"}>APPLY FILTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
            <span className = "icon ion-arrow-right-a"></span>
          </ReactRouter.Link>
        </div>
      </div>
  }
});
