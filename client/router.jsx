const routes = (
  <ReactRouter.Route name="root" handler={AppBody}>
    <ReactRouter.Route name="home" path="/" handler={Home} />
    <ReactRouter.Route name="other" path="/order" handler={Order} />
    <ReactRouter.Route name="customize" path="/customize" handler={Customize} />
    <ReactRouter.Route name="settings" path="/settings" handler={Settings} />
    <ReactRouter.DefaultRoute handler={AppLoading} />
    <ReactRouter.NotFoundRoute handler={AppNotFound} />
  </ReactRouter.Route>
)

Meteor.startup(function () {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler, state) {
    React.render(<Handler />, document.getElementById("app"));
 });
});
