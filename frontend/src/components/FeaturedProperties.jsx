import { useState } from "react";

function FeaturedProperties({
  setOpenChat,
  setPropertyPrompt
}) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      price: "$425,000",
      beds: "4 Bedrooms",
      baths: "3 Bathrooms",
      sqft: "2,150 sq ft",
      city: "Dallas, TX",
      description:
        "Modern family home featuring an open floor plan, updated kitchen, spacious backyard, and premium finishes throughout.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
    },
    {
      price: "$550,000",
      beds: "5 Bedrooms",
      baths: "4 Bathrooms",
      sqft: "3,000 sq ft",
      city: "Dallas, TX",
      description:
        "Luxury property with generous living space, large bedrooms, elegant interiors, and a beautifully landscaped outdoor area.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
    },
    {
      price: "$350,000",
      beds: "3 Bedrooms",
      baths: "2 Bathrooms",
      sqft: "1,850 sq ft",
      city: "Dallas, TX",
      description:
        "Beautiful starter home with modern finishes, bright living areas, and a comfortable layout perfect for families.",
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
            onClick={() => setSelectedProperty(property)}
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

      {selectedProperty && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="property-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProperty(null)}
            >
              ✕
            </button>

            <img
              src={selectedProperty.image}
              alt=""
            />

            <div className="property-modal-content">
              <h2>{selectedProperty.price}</h2>

              <p>🛏 {selectedProperty.beds}</p>
              <p>🛁 {selectedProperty.baths}</p>
              <p>📐 {selectedProperty.sqft}</p>
              <p>📍 {selectedProperty.city}</p>

              <p className="property-description">
                {selectedProperty.description}
              </p>

              <button
                className="primary-btn"
                onClick={() => {
                  setPropertyPrompt(`
Tell me more about this property:

Price: ${selectedProperty.price}
Bedrooms: ${selectedProperty.beds}
Bathrooms: ${selectedProperty.baths}
Size: ${selectedProperty.sqft}
Location: ${selectedProperty.city}

What are the key highlights, advantages and ideal buyer profile?
                  `);

                  setSelectedProperty(null);
                  setOpenChat(true);
                }}
              >
                Ask AI About This Property
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProperties;