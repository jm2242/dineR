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
    if (this.data.users[0] == undefined) {
        return (<div className="card2">
                    <div className="item item-divider no-items-title">
                        There Are No Saved Items
                    </div>
                        <div className="item item-text-wrap no-items-text">
                            Save items to fill the list by swiping items up or pressing the heart icon.
                        </div>
                  </div> 
                )
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
      <div>
        <div className="bar bar-head bar-stable">
          <h2 className="title">Saved Items</h2>
        </div>
        <br></br>
        <br></br>
        <div className="list">
          {list}
        </div>
      </div>
    )
  }
});
