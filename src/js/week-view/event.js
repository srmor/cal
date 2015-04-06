var React = require('react');

var Event = React.createClass({
  _generateTimePosition: function(time) {
    var pixelsFromTop = 0;
    var hourHeight = 48;
    var fiveMinuteHeight = hourHeight / 12;

    var hoursAfterEarliestTime = time.hour - 8;

    pixelsFromTop += hoursAfterEarliestTime * hourHeight;

    var numberOfFiveMinuteSegments = 0;

    if (time.minute > 0) {
      numberOfFiveMinuteSegments = (time.minute - (time.minute % 5))/5;
    }

    pixelsFromTop += numberOfFiveMinuteSegments * fiveMinuteHeight;

    return pixelsFromTop;
  },
  render: function () {
    var event = this.props.event;

    var eventTopYPosition = this._generateTimePosition(event.start);
    var eventBottomYPosition = this._generateTimePosition(event.end);

    var eventHeight = eventBottomYPosition - eventTopYPosition;

    var eventPositioning = {
      top: eventTopYPosition + 'px',
      height: eventHeight + 'px'
    };

    return (
      <div className="event" style={ eventPositioning }>
        <div>{ event.title }</div>
      </div>
    );
  }
});

module.exports = Event;
