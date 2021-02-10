import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = ({chosenCourses, courses}) => {
  const dayId = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4, 
    'Friday': 5,
    'Saturday': 6
  }

  const events = courses
  .filter(course => chosenCourses.includes(course.id))
  .map(course => ({
    title: course.id,
    startTime: course.start_time,
    endTime: course.end_time,
    daysOfWeek: course.days.split(/[ ,]+/).map(day => dayId[day])
  }))

  return (
  <FullCalendar
    className="calendar"
    plugins={[ timeGridPlugin ]}
    initialView="timeGridWeek"
    events = {events}
    slotMinTime = "08:00"
    slotMaxTime = "21:00"
    scrollTime = "09:00"
    weekends = {false}
    expandRows = {true}
    allDaySlot = {false}
    headerToolbar = {
      ({
        start: "",
        center: "",
        end: ""
      })
    }
    eventColor = "#00196E"
    eventTextColor = "#FFAD1D"
  />
  )
}

export default Calendar