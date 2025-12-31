import { useEffect, useState } from "react"
import "../styles/hero.css"

const slides = [
  {
    title: "React Study Guide",
    subtitle: "A practical guide to learning React the right way",
    image: "/images/book.png"
  },
  {
    title: "Build Faster with Vite",
    subtitle: "Modern workflow for React developers",
    image: "/images/flyer1.png"
  },
  {
    title: "Learn with AI & Real Examples",
    subtitle: "Curated learning from trusted sources",
    image: "/images/flyer2.png"
  }
]

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].subtitle}</p>

        <button
          className="primary-btn"
          onClick={() =>
            document.getElementById("payment").scrollIntoView({ behavior: "smooth" })
          }
        >
          Buy for ₦1000
        </button>
      </div>

      <div className="hero-image">
        <img src={slides[current].image} alt="React Study Guide" />
      </div>
    </section>
  )
}

export default HeroSlider
