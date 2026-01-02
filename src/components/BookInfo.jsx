const BookInfo = () => {
  return (
    <section style={{background: `linear-gradient(rgba(0,0,0,0.6), hsla(0, 0%, 0%, 0.60)), url('/images/illutration.png' )`, color:"white",   backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" }}>
      <h2>Why This Book?</h2>
      <p className="section-intro" style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.8", color: "#e0e7ff" , fontSize: "1.25 6rem"}}>
        Most beginners struggle with React because they don’t know what to learn
        or in what order. This guide fixes that.
      </p>

      <ul style={{ maxWidth: "600px", margin: "40px auto", lineHeight: "1.8", color: "#fff", listStyleType : "none", fontSize: "1", paddingBottom: "15px"

       }}>
        <li> Clear learning roadmap</li>
        <li> Beginner-friendly explanations</li>
        <li> Curated video resources</li>
        <li> Practical project guidance</li>
        <li> No unnecessary theory</li>
      </ul>
    </section>
  )
}

export default BookInfo