import "../styles/preview.css"

const BookPreview = () => {
  return (
    <section>
      <h2>What’s Inside the Book</h2>
      <p className="section-intro">
        A practical, beginner-friendly roadmap to learning React with real examples.
      </p>

      <div className="preview-block">
        <img src="/images/preview1.png" alt="React Basics" />
        <div>
          <h3>React Fundamentals</h3>
          <p>
            Learn how React works from the ground up — components, JSX, props,
            state, and how everything fits together without confusion.
          </p>
        </div>
      </div>

      <div className="preview-block reverse">
        <img src="/images/preview2.png" alt="Vite Setup" />
        <div>
          <h3>Modern Setup with Vite</h3>
          <p>
            Set up React the modern way using Vite for fast builds, clean project
            structure, and smooth developer experience.
          </p>
        </div>
      </div>

      <div className="preview-block">
        <img src="/images/preview3.png" alt="Projects" />
        <div>
          <h3>Hands-on Projects</h3>
          <p>
            Build real projects step by step while following curated YouTube
            lessons and practical explanations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookPreview
