export default function EventModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{event.classCode} - {event.className}</h2>
        <div className="modal-content">
          <p><strong>Date:</strong> {event.date}{event.endDate ? ` - ${event.endDate}` : ''}</p>
          <p><strong>Role:</strong> {event.role}</p>
          <p><strong>Status:</strong> {event.status}</p>
          {event.tutorNames?.length > 0 && <p><strong>Tutors:</strong> {event.tutorNames.join(', ')}</p>}
          {event.remarks && <p><strong>Remarks:</strong> {event.remarks}</p>}
        </div>
      </div>
    </div>
  )
}
