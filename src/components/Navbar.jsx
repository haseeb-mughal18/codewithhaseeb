import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
];

export default function Navbar({ onHome, isSubPage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On a sub page the hash links have no targets — send the user home first.
  const handleClick = (event, href) => {
    setOpen(false);
    if (!isSubPage) return;
    event.preventDefault();
    onHome?.(href);
  };

  return (
    <header className={`topnav${scrolled || open ? " scrolled" : ""}`}>
      <button
        type="button"
        className="brand"
        onClick={() => {
          setOpen(false);
          onHome?.("#hero");
        }}
      >
        HASEEB<span>MUGHAL</span>.
      </button>

      <ul className={open ? "open" : ""}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`nav-burger${open ? " open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
