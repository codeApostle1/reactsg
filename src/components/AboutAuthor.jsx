import "../styles/about.css"

const AboutAuthor = () => {
  return (
    <section>
      <h2>About the Author</h2>

      <div className="about-container">
        <img src="/images/author1.png" alt="Ademola Joel" />

        <div className="about-text">
          <h3>Ademola Joel</h3>
          <p>
            I’m a self-taught web developer passionate about helping beginners
            learn React the right way — without confusion or unnecessary complexity.
          </p>

          <p>
            This book is based on my personal learning journey, real practice,
            and curated resources that actually helped me understand React and
            build projects confidently.
          </p>

          <p>
            If you’re starting out or struggling to move forward, this guide
            was written specifically for you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutAuthor
