import { useState } from "react"
import "../styles/forms.css"

const Payment = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handlePayment = () => {
    if (!name || !email) {
      alert("Please enter your name and email")
      return
    }

    const message = `Hello, my name is ${name}. I want to purchase the React Study Guide ebook. My email is ${email}.`
    const whatsappUrl = `https://wa.me/2349120992007?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="payment">
      <h2>Get the React Study Guide</h2>
      <p className="price">₦1000 only</p>

      <div className="payment-card">
        <h3>Make Payment To</h3>

        <p><strong>Bank:</strong> Opay / Moniepoint</p>
        <p><strong>Account Number:</strong> 9120992007</p>
        <p><strong>Account Name:</strong> Joel Temitope Ademola</p>

        <div className="form-group">
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="primary-btn" onClick={handlePayment}>
          I Have Paid – Get Ebook
        </button>

        <small>
          After payment, you’ll be redirected to WhatsApp to confirm.
        </small>
      </div>
    </section>
  )
}

export default Payment
