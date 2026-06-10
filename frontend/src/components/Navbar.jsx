function Navbar() {
  const openChat = (e) => {
    e.preventDefault();

    document
      .querySelector(".chat-bubble")
      ?.click();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Prime Estates
      </div>

      <div className="nav-links">
        <a href="#properties">
          Properties
        </a>

        <a
          href="#"
          onClick={openChat}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;