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
        var Available = false
        for (var option in swipedMeal['mealOptions']) {
            options.push(
                '<li class="item item-checkbox">'
                +option
                +'<label class="checkbox">' +
                '<input type="checkbox" '+getCheckedValue(swipedMeal['mealOptions'][option])+'>' +
                '</label>' +
                '</li>')
           	Available = true
        }
        options = options.toString()
        var regex = new RegExp(',', 'g');
        options = options.replace(regex, '')
        if (!Available)
        {
        	return (
        		<div className="">
        			<div className="card">
		                <div className="item item-divider no-items-title">
		                    Customize
		                </div>
		                <div className="item item-text-wrap no-items-text">
		                    {swipedMeal['name']} has no available options.<br/>
		                    Please click to continue!
		                </div>
                	</div>
                	<ReactRouter.Link className="button bar-footer float-bottom-2 button-block button-balanced" to={"/orderMethod/" + this.props.params.mealId}>Order Now</ReactRouter.Link>
                </div>
            )
        }
        return (
            <div className="">
                <div className="card">
	                <div className="item item-divider no-items-title">
	                    Customize
	                </div>
	                <div className="item item-text-wrap no-items-text">
	                    {swipedMeal['name']}
	                </div>
                </div> 
                <ul className="list">
                    <div dangerouslySetInnerHTML={{__html: options}} />
                </ul>
				<ReactRouter.Link className="button bar-footer float-bottom-2 button-block button-balanced" to={"/orderMethod/" + this.props.params.mealId}>Order Now</ReactRouter.Link>
            </div>
        )
    }
});

function getCheckedValue(isChecked) {
    if (isChecked){
        return 'checked="checked"';
    }
    else {
        return "";
    }
}