import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import BookInfo from '../components/BookInfo'
import Payment from '../components/Payment'
import BookPreview from '../components/BookPreview'
import AboutAuthor from '../components/AboutAuthor'
import FeedbackForm from '../components/FeedbackForm'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <BookInfo />
      <Payment />
      <BookPreview />
      <AboutAuthor />
      <FeedbackForm />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home
