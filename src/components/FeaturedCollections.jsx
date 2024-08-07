import React from "react";
import './FeaturedCollections.css';

const FeaturedCollections = () => {
  const collections = [
    {
      title: "Red Wines",
      description: "Explore our exclusive collection of premium red wines.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/06/16/10/32/wine-2408620_640.jpg", // Red wine glass
    },
    {
      title: "White Wines",
      description: "Discover the finest selection of white wines.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/11/12/12/25/glasses-4620951_640.jpg", // White wine glass
    },
    {
      title: "Rosé Wines",
      description: "Check out our refreshing range of rosé wines.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/05/31/11/15/wine-791133_640.jpg", // Rosé wine glass
    },
    {
      title: "Sparkling Wines",
      description: "Indulge in our sparkling wines for every occasion.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/10/19/22/52/drink-6724735_640.png", // Sparkling wine glass
    },
  ];

  return (
    <div className="featured-collections">
      <h2>Featured Collections</h2>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div className="collection-card" key={index}>
            <img src={collection.imgSrc} alt={collection.title} />
            <div className="info">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
