export default function Filters({ filters, setFilters, events }) {
  const classCodes = [...new Set(events.map(e => e.extendedProps?.classCode).filter(Boolean))]
  const tutors = [...new Set(events.flatMap(e => e.extendedProps?.tutorNames || []))]
  const statuses = [...new Set(events.map(e => e.extendedProps?.status).filter(Boolean))]

  return (
    <div className="filters">
      <h3>Filters</h3>
      <input
        type="text"
        placeholder="Search..."
        value={filters.search}
        onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
      />
      <select value={filters.classCode} onChange={e => setFilters(f => ({ ...f, classCode: e.target.value }))}>
        <option value="">All Classes</option>
        {classCodes.map(code => <option key={code} value={code}>{code}</option>)}
      </select>
      <select value={filters.tutor} onChange={e => setFilters(f => ({ ...f, tutor: e.target.value }))}>
        <option value="">All Tutors</option>
        {tutors.map(tutor => <option key={tutor} value={tutor}>{tutor}</option>)}
      </select>
      <select value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
        <option value="">All Status</option>
        {statuses.map(status => <option key={status} value={status}>{status}</option>)}
      </select>
    </div>
  )
}
