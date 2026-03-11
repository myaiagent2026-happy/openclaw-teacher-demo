import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { useState, useMemo } from 'react'
import { useEvents, filterEvents } from './utils/schedule.js'
import EventModal from './components/EventModal.jsx'
import Filters from './components/Filters.jsx'
import Legend from './components/Legend.jsx'
import './App.css'

function App() {
  const events = useEvents()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [filters, setFilters] = useState({
    classCode: '',
    tutor: '',
    status: '',
    search: ''
  })

  const filteredEvents = useMemo(() => filterEvents(events, filters), [events, filters])

  return (
    <div className="app">
      <header className="header">
        <h1>YMCA Duty Calendar</h1>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <Filters filters={filters} setFilters={setFilters} events={events} />
          <Legend />
        </aside>
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listMonth'
            }}
            events={filteredEvents}
            eventClick={(info) => setSelectedEvent(info.event.extendedProps)}
            height="auto"
            navLinks={true}
            editable={false}
            selectable={false}
            selectMirror={false}
            dayMaxEvents={true}
            weekends={true}
          />
        </div>
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  )
}

export default App
