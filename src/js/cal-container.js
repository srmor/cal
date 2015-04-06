var React = require('react');

var Day = require('./week-view/day');

var CalContainer = React.createClass({
  _dayIndexToDayString: function (index) {
    var days = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday'
    };

    return days[index];
  },
  render: function () {
    var days = [];

    for (var i = 0; i < 7; i++) {
      var currentDay = this._dayIndexToDayString(i);
      days.push(<Day day={ i } events={ this.props.events[currentDay] } day={ currentDay } key={ i }/>);
    }

    var seperators = [];

    for (var i = 0; i < 28; i++) {
      if (i % 2 === 0) {
        seperators.push(<li className="time-border half"></li>);
      }
      else {
        seperators.push(<li className="time-border"></li>);
      }
    }

    var timeLabels = [];

    for (var i = 0; i < 14; i++) {
      var curTime = i + 8;

      if (curTime > 12) {
        timeLabels.push(<li className="time-label">{ curTime % 12 } pm</li>);
      }
      else {
        timeLabels.push(<li className="time-label">{ curTime } am</li>);
      }
    }

    return (
      <div className="calendar-container week-view">
        <ul className="time-labels">
          { timeLabels }
        </ul>
        <div className="days-container">
          <ul className="time-borders">
            { seperators }
          </ul>
          <div className="days">
            { days }
          </div>
        </div>
      </div>
    )
  }
});

module.exports = CalContainer;
