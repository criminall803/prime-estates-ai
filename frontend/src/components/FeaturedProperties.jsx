function FeaturedProperties() {
  const properties = [
    {
      price: "$425,000",
      beds: "4 Bed • 3 Bath",
      city: "Dallas, TX",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
    },
    {
      price: "$550,000",
      beds: "5 Bed • 4 Bath",
      city: "Dallas, TX",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
    },
    {
      price: "$350,000",
      beds: "3 Bed • 2 Bath",
      city: "Dallas, TX",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    },
  ];

  return (
    <section
      id="properties"
      className="properties-section"
    >
      <h2>Featured Properties</h2>

      <div className="property-grid">
        {properties.map((property, index) => (
          <div
            className="property-card"
            key={index}
          >
            <img
              src={property.image}
              alt=""
            />

            <div className="property-info">
              <h3>{property.price}</h3>
              <p>{property.beds}</p>
              <p>{property.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;