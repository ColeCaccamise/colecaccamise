export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex justify-center">
      <span className="text-sm text-low-contrast-text">
        &copy; {currentYear} Cole Caccamise
      </span>
    </footer>
  );
}
