import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2023, 1, 20, 10, 0),
    end: new Date(2023, 1, 20, 12, 0),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(2023, 1, 22, 14, 0),
    end: new Date(2023, 1, 22, 16, 0),
  },
  {
    id: 3,
    title: 'Event 3',
    start: new Date(2023, 1, 23, 9, 0),
    end: new Date(2023, 1, 23, 11, 0),
  },
];

const MyCalendar = () => (
  <div style={{ height: '500px' }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ borderWidth: '1px', borderColor: 'gray' }}
    />
  </div>
);

export default MyCalendar;
