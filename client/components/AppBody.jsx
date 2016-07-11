AppBody = React.createClass({
  render() {
    return (
      <div className="ionic-body">
        <div className="bar bar-main bar-header bar-light">
          <ReactRouter.Link className="button button-icon ion-android-funnel header-icon" to={"/settings"}></ReactRouter.Link>
          <ReactRouter.Link className="h1 title" to={"/home"}><img className="nav-bar-logo" src="/logo_with_no_edges.png" /></ReactRouter.Link>
          <ReactRouter.Link className="button button-icon ion-ios-star header-icon" to={"/savedItems"}></ReactRouter.Link>
        </div>
        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              <ReactRouter.RouteHandler />
            </div>
          </div>
        </div>
      </div> 
    )
  }
})
