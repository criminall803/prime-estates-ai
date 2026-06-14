function Contact() {
    console.log("Rendering Contact component");
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <h2>Contact Us</h2>

      <p>
        Interested in a property? Get in touch.
      </p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;