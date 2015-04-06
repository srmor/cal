var React = require('react');

var CalContainer = require('./cal-container');

var events = {
  sunday: [],
  monday: [
    {
      start: {
        hour: 10,
        minute: 0
      },
      end: {
        hour: 12,
        minute: 55
      },
      title: 'CS 345'
    }
  ],
  tuesday: [
    {
      start: {
        hour: 13,
        minute: 0
      },
      end: {
        hour: 14,
        minute: 25
      },
      title: 'CS 490'
    },
    {
      start: {
        hour: 16,
        minute: 0
      },
      end: {
        hour: 17,
        minute: 25
      },
      title: 'MATH 211'
    },
    {
      start: {
        hour: 18,
        minute: 0
      },
      end: {
        hour: 21,
        minute: 05
      },
      title: 'CS 435'
    }
  ],
  wednesday: [
    {
      start: {
        hour: 10,
        minute: 0
      },
      end: {
        hour: 12,
        minute: 55
      },
      title: 'CS 357'
    },
    {
      start: {
        hour: 13,
        minute: 0
      },
      end: {
        hour: 14,
        minute: 55
      },
      title: 'PHYS 203A'
    },
    {
      start: {
        hour: 18,
        minute: 0
      },
      end: {
        hour: 21,
        minute: 05
      },
      title: 'PHYS 203'
    }
  ],
  thursday: [
    {
      start: {
        hour: 13,
        minute: 0
      },
      end: {
        hour: 14,
        minute: 25
      },
      title: 'CS 490'
    },
    {
      start: {
        hour: 16,
        minute: 0
      },
      end: {
        hour: 17,
        minute: 25
      },
      title: 'MATH 211'
    }
  ],
  friday: [],
  saturday: []
};

React.render(<CalContainer events={ events }/>, document.getElementById('main-container'));
