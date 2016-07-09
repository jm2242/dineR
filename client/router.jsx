const routes = (
  <ReactRouter.Route name="root" handler={AppBody}>
    <ReactRouter.Route name="home" path="/" handler={Home} />
    <ReactRouter.Route name="other" path="/order" handler={Order} />
    <ReactRouter.Route name="customize" path="/customize/:mealId" handler={Customize}/>
    <ReactRouter.Route name="settings" path="/settings" handler={Settings} />
    <ReactRouter.Route name="savedItems" path="/savedItems" handler={savedItems} />
    <ReactRouter.Route name="orderMethod" path="/orderMethod" handler={orderMethod} />
    <ReactRouter.DefaultRoute handler={AppLoading} />
    <ReactRouter.NotFoundRoute handler={AppNotFound} />
  </ReactRouter.Route>
)

Meteor.startup(function () {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler, state) {
    React.render(<Handler />, document.getElementById("app"));
 });
});
