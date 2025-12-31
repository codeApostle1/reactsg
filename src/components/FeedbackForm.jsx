import { useState } from "react"
import "../styles/forms.css"

const FeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section>
      <h2>Feedback</h2>
      <p className="section-intro">
        Already read the book? Share your experience.
      </p>

      {!submitted ? (
        <form className="payment-card" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email (optional)" />
          <textarea placeholder="Your Feedback" required />

          <button className="primary-btn" type="submit">
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="payment-card">
          <h3>Thank you! 🙌</h3>
          <p>Your feedback has been received and will be reviewed.</p>
        </div>
      )}
    </section>
  )
}

export default FeedbackForm
