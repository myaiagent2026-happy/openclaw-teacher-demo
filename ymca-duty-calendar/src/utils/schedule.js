import scheduleData from '../data/schedule.json'

export function useEvents() {
  return scheduleData.events.map(event => ({
    id: event.id,
    title: `${event.classCode} - ${event.role}`,
    start: event.date,
    end: event.endDate || event.date,
    extendedProps: event,
    className: event.status === 'normal duty' ? 'normal-duty' : 
               event.status === 'job shadowing' ? 'job-shadowing' : 'special-arrangement'
  }))
}

export function filterEvents(events, filters) {
  return events.filter(event => {
    const props = event.extendedProps
    if (filters.classCode && props.classCode !== filters.classCode) return false
    if (filters.tutor && !props.tutorNames?.includes(filters.tutor)) return false
    if (filters.status && props.status !== filters.status) return false
    if (filters.search) {
      const search = filters.search.toLowerCase()
      return props.className?.toLowerCase().includes(search) ||
             props.classCode?.toLowerCase().includes(search) ||
             props.remarks?.toLowerCase().includes(search)
    }
    return true
  })
}
