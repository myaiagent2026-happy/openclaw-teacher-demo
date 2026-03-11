import scheduleData from '../data/schedule.json'

export function useEvents() {
  return (scheduleData.events || []).map((e) => ({
    title: `${e.classCode} - ${Array.isArray(e.tutorNames) ? e.tutorNames.join(' / ') : ''}`,
    start: e.date,
    allDay: true,
    extendedProps: e,
  }))
}
