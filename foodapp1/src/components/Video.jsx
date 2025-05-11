import React from "react";

const Video = () => {
  // Famous YouTube Channels Data
  const famousChannels = [
    {
      name: "Village Cooking Channel",
      link: "https://www.youtube.com/@villagecookingchannel",
      imgSrc: "/images/image11.jpg",
      subs: "10M+ Subscribers"
    },
    {
      name: "Kabita's Kitchen",
      link: "https://www.youtube.com/channel/UCBSwcEOp0PMwhvE6FVjgITw",
      imgSrc: "/images/image12.jpg",
      subs: "5M+ Subscribers"
    },
    {
      name: "Cook with Nisha",
      link: "https://www.youtube.com/@CookwithNisha",
      imgSrc: "/images/image13.jpg",
      subs: "3M+ Subscribers"
    },
    {
      name: "Bharatzkitchen",
      link: "https://www.youtube.com/@Bharatzkitchen",
      imgSrc: "/images/image14.jpg",
      subs: "8M+ Subscribers"
    },
    {
      name: "Hebbars Kitchen",
      link: "https://www.youtube.com/@HebbarsKitchen",
      imgSrc: "/images/image15.jpg",
      subs: "7M+ Subscribers"
    }
  ];

  // Recommended Videos Data
  const recommendedVideos = [
    {
      title: "Easy Breakfast Recipes",
      link: "https://www.bing.com/videos/riverview/relatedvideo?q=idli+making+vedio+download&mid=42383AED8D1977BD977A42383AED8D1977BD977A&FORM=VIRE",
      imgSrc: "/images/image16.jpg",
      views: "1.2M views"
    },
    {
      title: "30 Minute Lunch Ideas",
      link: "https://www.youtube.com/watch?v=BNIwudoKNrU",
      imgSrc: "/images/image17.jpg",
      views: "850K views"
    },
    {
      title: "Healthy Dinner Options",
      link: "https://www.youtube.com/watch?v=mhDJNfV7hjk",
      imgSrc: "/images/image18.jpg",
      views: "1.5M views"
    },
    {
      title: "Indian Dessert Recipes",
      link: "https://www.youtube.com/watch?v=YkD74gaIQmc",
      imgSrc: "/images/image38.jpg",
      views: "2M views"
    },
    {
      title: "Summer Cool Drinks",
      link: "https://www.youtube.com/watch?v=Iw-gACb97vM",
      imgSrc: "/images/image27.jpg",
      views: "1M views"
    }
  ];

  return (
    <div className="video-container">
      {/* Famous YouTube Channels Section */}
      <section className="section">
        <h2>Famous YouTube Channels</h2>
        <p className="section-description">Follow these popular cooking channels for amazing recipes</p>
        
        <div className="gallery">
          {famousChannels.map((channel, index) => (
            <div key={`channel-${index}`} className="gallery-card">
              <a href={channel.link} target="_blank" rel="noopener noreferrer">
                <img src={channel.imgSrc} alt={channel.name} className="gallery-image" />
                <div className="card-info">
                  <h3>{channel.name}</h3>
                  <p>{channel.subs}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Videos Section */}
      <section className="section">
        <h2>Recommended Videos</h2>
        <p className="section-description">Handpicked videos for your next cooking session</p>
        
        <div className="gallery">
          {recommendedVideos.map((video, index) => (
            <div key={`video-${index}`} className="gallery-card">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <img src={video.imgSrc} alt={video.title} className="gallery-image" />
                <div className="card-info">
                  <h3>{video.title}</h3>
                  <p>{video.views}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .video-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section {
          margin-bottom: 3rem;
        }
        
        h2 {
          font-size: 2rem;
          color: #ff6347;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        
        .section-description {
          text-align: center;
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
          padding: 1rem;
        }
        
        .gallery-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        
        .gallery-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        
        .card-info {
          padding: 1rem;
        }
        
        .card-info h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          color: #333;
        }
        
        .card-info p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .gallery {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Video;