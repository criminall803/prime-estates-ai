function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          Discover Premium Real Estate Properties
        </div>

        <h1>
          Find Your Dream Home
        </h1>

        <p>
          Browse premium properties, get instant answers,
          and connect with agents 24/7.
        </p>

        <div className="hero-buttons">
          <button
  className="primary-btn"
  onClick={() => {
    document
      .getElementById("properties")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }}
>
  Browse Properties
</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;