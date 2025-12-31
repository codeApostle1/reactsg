const BookInfo = () => {
  return (
    <section>
      <h2>Why This Book?</h2>
      <p className="section-intro">
        Most beginners struggle with React because they don’t know what to learn
        or in what order. This guide fixes that.
      </p>

      <ul style={{ maxWidth: "600px", margin: "40px auto", lineHeight: "1.8", color: "#334155" }}>
        <li>✔ Clear learning roadmap</li>
        <li>✔ Beginner-friendly explanations</li>
        <li>✔ Curated video resources</li>
        <li>✔ Practical project guidance</li>
        <li>✔ No unnecessary theory</li>
      </ul>
    </section>
  )
}

export default BookInfo