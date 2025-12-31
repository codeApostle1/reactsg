const Footer = () => {
  return (
    <footer style={{
      background: "#0f172a",
      color: "#cbd5f5",
      padding: "40px 6%",
      textAlign: "center"
    }}>
      <p>
        © {new Date().getFullYear()} React Study Guide
      </p>
      <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
        Built with React & Vite
      </p>
    </footer>
  )
}

export default Footer