Customize = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let handle = Meteor.subscribe("meals")
    let data = meals.find({affirmative: true}).fetch()
    return {
      loading: !handle.ready(),
      users: data
    }
  },
  reset() {
    Meteor.call('reset')
  },
  render() {
    console.log(this.props);
    let swipedMeal = meals.findOne({_id: this.props.params.mealId});
    var options = [];
    var c = 0;
    for (var option in swipedMeal['mealOptions']) {
      options.push('<p>'+option+'<input type="checkbox" value="'+c+'" '
        +getCheckedValue(swipedMeal['mealOptions'][option])+
        '/></p>')
      c += 1;
    }
    options = options.toString()
    options.replace(/,/g, '')
    return (
      <div className="">
        <div className="item item-divider">
          <h1>Customize</h1>
        </div>
        <h2>{swipedMeal['name']}</h2>
    <div dangerouslySetInnerHTML={{__html: options}} />    
      <div className="bar bar-footer bar-assertive">
          <ReactRouter.Link className="button button-bar" to={"/"}>Order  
            <span className = "icon ion-arrow-right-a"></span>
          </ReactRouter.Link>
        </div>
      </div>
    )
  }
});

function getCheckedValue(isChecked) {
  if (isChecked){
    return "checked";
  }
  else {
    return "";
  }
}