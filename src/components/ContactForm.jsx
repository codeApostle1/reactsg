import { useState } from "react"
import "../styles/forms.css"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSend = (e) => {
    e.preventDefault()

    const subject = "React Study Guide Inquiry"
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`

    window.location.href = `mailto:joelmtn7@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section>
      <h2>Contact Me</h2>
      <p className="section-intro">
        Have questions before purchasing? Reach out directly.
      </p>

      <form className="payment-card" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="primary-btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactForm
