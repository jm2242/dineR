MyButton = React.createClass({
  render: function() { 
    var textStyle = {
      cursor: "pointer"
    }
    return (
      <a className={this.props.buttonClass} style={textStyle} onClick={this.props.clickHandler}></a>
    )
  }
})