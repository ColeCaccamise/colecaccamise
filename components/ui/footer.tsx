export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-8 flex items-center justify-between px-0 py-2"
      style={{
        borderTop: "2px solid #808080",
        fontSize: "0.7rem",
        color: "#444444",
        fontFamily: "'Tahoma', Arial, sans-serif",
      }}
    >
      <span>&copy; {currentYear} Cole Caccamise. All rights reserved.</span>
      <span style={{ color: "#808080" }}>Windows Edition v1.0</span>
    </footer>
  );
}

