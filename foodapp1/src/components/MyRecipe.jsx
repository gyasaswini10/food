import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyRecipe() {
  const navigate = useNavigate();

  const videoRecipes = [
    {
      id: 1,
      title: "Pasta Carbonara Video Guide",
      type: "video",
      thumbnail: "/images/video-recipe1.jpg",
      channel: "Italian Cooking",
      duration: "12:34",
      views: "1.2M views",
      dateSaved: "2023-10-15"
    },
    {
      id: 2,
      title: "Perfect Pancakes Tutorial",
      type: "video",
      thumbnail: "/images/video-recipe2.jpg",
      channel: "Breakfast Masters",
      duration: "8:45",
      views: "856K views",
      dateSaved: "2023-10-10"
    }
  ];

  const textRecipes = [
    {
      id: 1,
      title: "Grandma's Special Curry",
      type: "text",
      image: "/images/text-recipe1.jpg",
      description: "A rich and flavorful curry with secret family spices that's been passed down for generations.",
      cookingTime: "45 mins",
      dateSaved: "2023-10-12"
    },
    {
      id: 2,
      title: "Healthy Buddha Bowl",
      type: "text",
      image: "/images/text-recipe2.jpg",
      description: "Nutritious grain bowl packed with vegetables, protein, and a delicious tahini dressing.",
      cookingTime: "25 mins",
      dateSaved: "2023-10-08"
    }
  ];

  const handleUploadVideoRecipe = () => {
    navigate('/upload-video-recipe');
  };

  const handleUploadTextRecipe = () => {
    navigate('/upload-text-recipe');
  };

  return (
    <div className="my-recipes-container">
      <header className="my-recipes-header">
        <h1>My Recipes Collection</h1>
        <p>Your personal cooking space with video and text recipes</p>
      </header>

      <section className="recipe-type-section">
        <h2>Video Recipes</h2>
        {videoRecipes.length > 0 ? (
          <div className="video-recipes-grid">
            {videoRecipes.map(recipe => (
              <div key={recipe.id} className="video-recipe-card">
                <div className="thumbnail-container">
                  <img src={recipe.thumbnail} alt={recipe.title} />
                  <span className="duration-badge">{recipe.duration}</span>
                </div>
                <div className="video-recipe-info">
                  <h3>{recipe.title}</h3>
                  <p className="channel">{recipe.channel}</p>
                  <div className="meta-data">
                    <span>{recipe.views}</span>
                    <span>Saved on {recipe.dateSaved}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-message">You haven't saved any video recipes yet.</p>
        )}
      </section>

      <section className="recipe-type-section">
        <h2>Text Recipes with Description</h2>
        {textRecipes.length > 0 ? (
          <div className="text-recipes-grid">
            {textRecipes.map(recipe => (
              <div key={recipe.id} className="text-recipe-card">
                <div className="text-recipe-image-container">
                  <img src={recipe.image} alt={recipe.title} className="text-recipe-image" />
                </div>
                <div className="text-recipe-content">
                  <h3>{recipe.title}</h3>
                  <div className="text-recipe-description">
                    <p>{recipe.description}</p>
                  </div>
                  <div className="meta-data">
                    <span>Cooking Time: {recipe.cookingTime}</span>
                    <span>Saved on {recipe.dateSaved}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-message">You haven't saved any text recipes yet.</p>
        )}
      </section>

      <div className="upload-section">
        <div className="upload-buttons-container">
          <button onClick={handleUploadVideoRecipe} className="upload-button video">
            <i className="icon">🎥</i> Upload Video Recipe
          </button>
          <button onClick={handleUploadTextRecipe} className="upload-button text">
            <i className="icon">📝</i> Upload Text Recipe
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .my-recipes-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
        }

        .my-recipes-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .my-recipes-header h1 {
          font-size: 2.5rem;
          color: #ff6347;
          margin-bottom: 0.5rem;
        }

        .my-recipes-header p {
          font-size: 1.1rem;
          color: #666;
        }

        .recipe-type-section {
          margin-bottom: 3rem;
          background: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
        }

        .recipe-type-section h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #eee;
        }

        .empty-message {
          color: #888;
          font-style: italic;
          text-align: center;
          padding: 2rem;
        }

        .video-recipes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .text-recipes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .video-recipe-card, .text-recipe-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .text-recipe-card {
          display: flex;
          flex-direction: column;
        }

        .video-recipe-card:hover, .text-recipe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .thumbnail-container {
          position: relative;
        }

        .video-recipe-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .text-recipe-image-container {
          width: 100%;
          overflow: hidden;
        }

        .text-recipe-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid #eee;
        }

        .duration-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 3px 6px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .video-recipe-info, .text-recipe-content {
          padding: 1.5rem;
        }

        .video-recipe-info h3, .text-recipe-content h3 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          color: #333;
        }

        .channel {
          color: #666;
          font-size: 0.9rem;
          margin: 0.3rem 0 1rem;
        }

        .text-recipe-description {
          margin: 1rem 0;
        }

        .text-recipe-description p {
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
        }

        .meta-data {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #888;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }

        .upload-section {
          text-align: center;
          margin-top: 2rem;
        }

        .upload-buttons-container {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .upload-button {
          border: none;
          padding: 12px 24px;
          font-size: 1.1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .upload-button.video {
          background-color: #ff4757;
          color: white;
        }

        .upload-button.text {
          background-color: #2ed573;
          color: white;
        }

        .upload-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .upload-button.video:hover {
          background-color: #e84118;
        }

        .upload-button.text:hover {
          background-color: #20bf6b;
        }
      `}</style>
    </div>
  );
}

export default MyRecipe;
