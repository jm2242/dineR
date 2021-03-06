const routes = (
  <ReactRouter.Route name="root" handler={AppBody}>
    <ReactRouter.Route name="home" path="/home/?:filterOption?" handler={Home} />
    <ReactRouter.Route name="customize" path="/customize/:mealId" handler={Customize}/>
    <ReactRouter.Route name="settings" path="/settings" handler={Settings} />
    <ReactRouter.Route name="savedItems" path="/savedItems" handler={savedItems} />
    <ReactRouter.Route name="savedItemsView" path="/savedItemsView/:mealId" handler={savedItemsView} />
    <ReactRouter.Route name="orderMethod" path="/orderMethod/:mealId" handler={orderMethod} />
    <ReactRouter.Route name="orderPlaced" path="/orderPlaced/:mealId" handler={orderPlaced} />
    <ReactRouter.Route name="orderPickup" path="/orderPickup/:mealId" handler={orderPickup} />
    <ReactRouter.Redirect from='/' to='/home' />  
    <ReactRouter.DefaultRoute handler={AppLoading} />
    <ReactRouter.NotFoundRoute handler={AppNotFound} />
  </ReactRouter.Route>
)

Meteor.startup(function () {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler, state) {
    React.render(<Handler />, document.getElementById("app"));
 });
});
