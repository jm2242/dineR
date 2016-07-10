React.initializeTouchEvents(true)
// Add listener to get :active pseudoselector working. hack
document.addEventListener("touchstart", function(){}, false)

savedItems = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let handle = Meteor.subscribe("meals")
    let data = savedMeals.find().fetch()
    return {
      loading: !handle.ready(),
      users: data
    }
  },
removeButtonClicked() {
  //
},
  reset() {
    Meteor.call('reset')
  },
  render() {
    if (this.data.loading) {
      return <h1>Loading</h1>
    }
    let list = this.data.users.map((user) => {
      return (
      <div>
        <ReactRouter.Link className="item item-avatar" key={user._id} to={"/savedItemsView/" + user._id}>        
          <img src={user.image}></img>

          <h2 className="word-will-wrap">{user.name}</h2>
          <p className="word-will-wrap">{user.details}</p>
        </ReactRouter.Link>
      </div>
      )
    })
    return (
      <div className="list">
        <div className="item item-divider" align="center">
          <h1>Saved Items</h1>
        </div>
        {list}
      </div>
    )
  }
});
