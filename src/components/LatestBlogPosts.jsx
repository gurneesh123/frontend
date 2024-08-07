import React from "react";
import './LatestBlogPosts.css';

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      title: "The Art of Wine Tasting: A Beginner's Guide",
      description:
        "Discover the essential steps to appreciate wine like a sommelier. Learn how to identify flavors, aromas, and textures in every sip.",
      imgSrc:
        "https://images.pexels.com/photos/1407854/pexels-photo-1407854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Exploring French Vineyards: Must-Visit Destinations",
      description:
        "Explore the most renowned French vineyards and plan your next wine-tasting tour. From Bordeaux to Burgundy, find the best spots.",
      imgSrc:
        "https://images.pexels.com/photos/372965/pexels-photo-372965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Pairing Wines with Food: Tips from Experts",
      description:
        "Enhance your dining experience with perfect wine pairings. Discover expert tips to match wines with your favorite dishes.",
      imgSrc:
        "https://images.pexels.com/photos/236813/pexels-photo-236813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="latest-blog-posts">
      <h2>Latest from Chateaux Vins</h2>
      <div className="blog-post-list">
        {blogPosts.map((post, index) => (
          <div className="blog-post-card" key={index}>
            <img src={post.imgSrc} alt={post.title} />
            <div className="info">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogPosts;
