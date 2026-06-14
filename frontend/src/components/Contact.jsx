function Contact() {
  return (
    <section id="contact" className="contact-section">
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
          placeholder="Your Message"
          rows="5"
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
<section
  id="contact"
  className="contact-section"
  style={{ border: "5px solid red" }}
>
export default Contact;