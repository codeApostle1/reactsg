import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">React Study Guide</h2>

      <ul className="nav-links">
        <li><a href="#payment">Buy</a></li>
        <li><a href="#preview">Preview</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar