export default function EventModal({
  event,
  onClose
}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{event.classCode}</h2>
        <div className="modal-content">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Tutors:</strong> {event.tutorNames.join(', ')}</p>
          {event.lesson ? <p><strong>Lesson:</strong> {event.lesson}</p> : null}
        </div>
      </div>
    </div>
  )
}
