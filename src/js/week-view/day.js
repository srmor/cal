var React = require('react');

var Event = require('./event');

var Day = React.createClass({
  render: function () {
    var events = this.props.events.map(function (event, index) {
      return <Event event={ event } key={ index }/>;
    });

    return (
      <div className="day-view">
        <div className="day-title">{ this.props.day }</div>
        { events }
      </div>
    )
  }
});

module.exports = Day;
