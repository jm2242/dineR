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
        if (this.props.params.mealId == undefined)
        {
            return <h1> Error</h1>
        }
        let swipedMeal = meals.findOne({_id: this.props.params.mealId}) ||
            savedMeals.findOne({_id: this.props.params.mealId}) ||
            specialMeals.findOne( {_id: this.props.params.mealId});

        var options = [];
        var c = 0;
        for (var option in swipedMeal['mealOptions']) {
            options.push(
                '<li class="item item-checkbox">'
                +option
                +'<label class="checkbox">' +
                '<input type="checkbox" checked="'+getCheckedValue(swipedMeal['mealOptions'][option])+'">' +
                '</label>' +
                '</li>')
        }
        options = options.toString()
        var regex = new RegExp(',', 'g');
        options = options.replace(regex, '')
        return (
            <div className="">
                <div className="item item-divider">
                    <h1>Customize</h1>
                </div>
                <h2>{swipedMeal['name']}</h2>
                <ul className="list">
                    <div dangerouslySetInnerHTML={{__html: options}} />
                </ul>
                <div className="bar bar-footer bar-assertive">
                    <ReactRouter.Link className="button button-bar" to={"/orderMethod/" + this.props.params.mealId}>Order
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