import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleRecipeExpansion = (recipeId) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  // Helper function to generate preparation steps
  const getPreparationSteps = (title) => {
    const steps = {
      'Idli': [
        'Soak rice and urad dal separately for 4-6 hours',
        'Grind them separately to a smooth batter',
        'Mix the batters together and ferment overnight',
        'Grease idli molds and pour the batter',
        'Steam for 10-12 minutes and serve hot with chutney'
      ],
      'Mysoor Bonda': [
        'Soak urad dal for 2 hours and grind to smooth paste',
        'Add chopped ginger, green chilies and salt',
        'Heat oil and drop small portions of batter',
        'Fry until golden brown on medium flame',
        'Drain on paper towel and serve with coconut chutney'
      ],
      'Masala Vada': [
        'Soak chana dal for 2 hours and drain',
        'Coarsely grind with spices and onions',
        'Shape into small patties',
        'Deep fry in hot oil until crispy',
        'Serve hot with mint chutney'
      ],
      'Masala Dosa': [
        'Prepare dosa batter by fermenting rice and dal',
        'Heat tawa and spread batter thinly',
        'Sprinkle potato masala on one side',
        'Drizzle oil and cook until crispy',
        'Fold and serve with sambar and chutney'
      ],
      'Upma': [
        'Dry roast rava until aromatic',
        'Heat oil and temper with mustard seeds, urad dal',
        'Add chopped vegetables and sauté',
        'Add water and bring to boil',
        'Add roasted rava and cook until thick'
      ],
      'Chiken Curry': [
        'Marinate chicken with spices for 30 mins',
        'Sauté onions, ginger-garlic paste and tomatoes',
        'Add chicken and cook for 5 mins',
        'Add water and simmer for 15-20 mins',
        'Garnish with coriander and serve hot'
      ],
      'Dal Rice': [
        'Cook toor dal until soft',
        'Prepare tadka with mustard, cumin and garlic',
        'Mix dal with rice and tempering',
        'Add ghee and mix well',
        'Serve hot with pickle and papad'
      ],
      'Aloo Parata': [
        'Boil and mash potatoes with spices',
        'Prepare dough with wheat flour and water',
        'Stuff potato mixture into dough balls',
        'Roll out and cook on tawa with ghee',
        'Serve hot with curd or pickle'
      ],
      'Curd rice': [
        'Cook rice until soft and let it cool',
        'Mix with fresh curd and salt',
        'Prepare tempering with mustard seeds and curry leaves',
        'Add tempering to rice mixture',
        'Garnish with pomegranate and serve'
      ],
      'Rasam Rice': [
        'Prepare rasam with tamarind, tomatoes and spices',
        'Cook rice separately until soft',
        'Mix rasam with rice as needed',
        'Add ghee and mix well',
        'Serve hot with papad'
      ],
      'Veg Fried Rice': [
        'Cook and cool rice completely',
        'Stir-fry vegetables in hot oil',
        'Add soy sauce and vinegar',
        'Toss in cooked rice and mix well',
        'Garnish with spring onions and serve'
      ],
      'Palak Panner': [
        'Blanch spinach and make puree',
        'Sauté onions, garlic and spices',
        'Add spinach puree and cook',
        'Add paneer cubes and simmer',
        'Serve hot with naan or rice'
      ],
      'Boiled Egg Curry': [
        'Boil eggs and remove shells',
        'Prepare onion-tomato gravy with spices',
        'Add boiled eggs to the gravy',
        'Simmer for 5-7 minutes',
        'Garnish with coriander and serve'
      ],
      'Ladies Finger Curry': [
        'Wash and chop okra into pieces',
        'Sauté with onions and spices',
        'Cook on low heat until tender',
        'Add tamarind pulp if desired',
        'Serve hot with rice or roti'
      ],
      'Ivy Gourd Fry': [
        'Slice ivy gourd into thin pieces',
        'Sauté with mustard seeds and spices',
        'Cook covered until tender',
        'Uncover and fry until crispy',
        'Serve as side dish with rice'
      ],
      'Mango Juice': [
        'Peel and chop ripe mangoes',
        'Blend with sugar and water',
        'Strain through a sieve',
        'Chill for 2 hours',
        'Serve with ice cubes'
      ],
      'Nimbu Pani': [
        'Squeeze fresh lemon juice',
        'Add water, sugar and salt',
        'Mix well until sugar dissolves',
        'Add roasted cumin powder',
        'Serve chilled with mint leaves'
      ],
      'Pomogrante Juice': [
        'Extract seeds from pomegranate',
        'Blend seeds with little water',
        'Strain to remove fibers',
        'Add sugar if needed',
        'Serve chilled with ice'
      ],
      'Musk Meoln Juice': [
        'Peel and chop muskmelon',
        'Blend with sugar and water',
        'Strain through a sieve',
        'Chill for 1 hour',
        'Garnish with mint and serve'
      ],
      'Water Melon Juice': [
        'Remove seeds from watermelon',
        'Blend the flesh without water',
        'Strain if desired',
        'Chill for 30 minutes',
        'Serve with ice cubes'
      ],
      'Syemya Payasam': [
        'Roast vermicelli in ghee',
        'Boil milk in separate pan',
        'Add roasted vermicelli to milk',
        'Cook until soft, add sugar',
        'Garnish with nuts and serve warm'
      ],
      'Carrot Halwa': [
        'Grate carrots finely',
        'Cook in milk until soft',
        'Add sugar and khoya',
        'Cook until thick',
        'Garnish with nuts and serve warm'
      ],
      'Junnu': [
        'Extract milk from junnu leaves',
        'Mix with jaggery and cardamom',
        'Pour into molds',
        'Steam for 15-20 minutes',
        'Let it set and serve chilled'
      ],
      'Pala Kova': [
        'Boil milk and reduce to thick consistency',
        'Add sugar and stir continuously',
        'Cook until mixture leaves sides of pan',
        'Pour into greased tray',
        'Cut into pieces when cooled'
      ],
      'Bread Halwa': [
        'Toast bread pieces in ghee',
        'Prepare sugar syrup',
        'Mix bread with syrup and milk',
        'Cook until thick consistency',
        'Garnish with nuts and serve warm'
      ]
    };

    return steps[title] || [
      'Step 1: Prepare all ingredients',
      'Step 2: Cook main components',
      'Step 3: Add spices and seasonings',
      'Step 4: Complete cooking process',
      'Step 5: Garnish and serve hot'
    ];
  };

  const breakfastImages = [
    { src: '/images/image16.jpg', title: 'Idli', desc: 'Delicious poha with veggies and spices.' },
    { src: '/images/image17.jpg', title: 'Mysoor Bonda', desc: 'Fluffy idlis with coconut chutney.' },
    { src: '/images/image18.jpg', title: 'Masala Vada', desc: 'Dosa with spiced potatoes.' },
    { src: '/images/image19.jpg', title: 'Masala Dosa', desc: 'Crispy parathas with curd.' },
    { src: '/images/image20.jpg', title: 'Upma', desc: 'Semolina upma with veggies.' },
  ];

  const lunchImages = [
    { src: '/images/image21.jpg', title: 'Chiken Curry', desc: 'Full Indian thali meal.' },
    { src: '/images/image22.jpg', title: 'Dal Rice', desc: 'Rich paneer curry with naan.' },
    { src: '/images/image23.jpg', title: 'Aloo Parata', desc: 'Fragrant vegetable rice dish.' },
    { src: '/images/image24.jpg', title: 'Curd rice', desc: 'Kidney beans with rice.' },
    { src: '/images/image25.jpg', title: 'Rasam Rice', desc: 'Spiced lentils with jeera rice.' },
  ];

  const dinnerImages = [
    { src: '/images/image31.jpg', title: 'Veg Fried Rice', desc: 'Spicy chole with fried bread.' },
    { src: '/images/image32.jpg', title: 'Palak Panner', desc: 'Bharwan shimla mirch.' },
    { src: '/images/image33.jpg', title: 'Boiled Egg Curry', desc: 'Classic potato-cauliflower sabzi.' },
    { src: '/images/image34.jpg', title: 'Ladies Finger Curry', desc: 'Healthy rotis with curry.' },
    { src: '/images/image35.jpg', title: 'Ivy Gourd Fry', desc: 'Stir-fried mixed vegetables.' },
  ];

  const drinksImages = [
    { src: '/images/image26.jpg', title: 'Mango Juice', desc: 'Chilled sweet yogurt drink.' },
    { src: '/images/image27.jpg', title: 'Nimbu Pani', desc: 'Refreshing lemon water.' },
    { src: '/images/image28.jpg', title: 'Pomogrante Juice', desc: 'Creamy mango delight.' },
    { src: '/images/image29.jpg', title: 'Musk Meoln Juice', desc: 'Natural electrolyte booster.' },
    { src: '/images/image30.jpg', title: 'Water Melon Juice', desc: 'Spiced chaas drink.' },
  ];

  const dessertImages = [
    { src: '/images/image36.jpg', title: 'Syemya Payasam', desc: 'Sweet fried milk balls.' },
    { src: '/images/image37.jpg', title: 'Carrot Halwa', desc: 'Soft syrupy cheese balls.' },
    { src: '/images/image38.jpg', title: 'Junnu', desc: 'Rice pudding with nuts.' },
    { src: '/images/image39.jpg', title: 'Pala Kova', desc: 'Semolina dessert with ghee.' },
    { src: '/images/image40.jpg', title: 'Bread Halwa', desc: 'Crispy spiral soaked in syrup.' },
  ];

  const sections = [
    { title: 'Breakfast', customImages: breakfastImages },
    { title: 'Lunch', customImages: lunchImages },
    { title: 'Dinner', customImages: dinnerImages },
    { title: 'Summer Drinks', customImages: drinksImages },
    { title: 'Desserts', customImages: dessertImages },
  ];

  // Combine all recipes for searching
  const allRecipes = sections.flatMap(section => 
    section.customImages.map(recipe => ({
      ...recipe,
      category: section.title,
      id: `${section.title}-${recipe.title}`.replace(/\s+/g, '-'),
      steps: getPreparationSteps(recipe.title)
    }))
  );

  // Filter recipes based on search query
  const filteredRecipes = searchQuery
    ? allRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <header className="sidebar-header">
          <div className="user-account">
            <img src="/path/to/profile.jpg" alt="User" className="user-avatar" />
            <p className="user-name">Hello, User</p>
          </div>
          <button className="toggler sidebar-toggler" onClick={toggleSidebar}>
            <span className="material-symbols-rounded">
              {sidebarCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
        </header>

        <nav className="sidebar-nav">
          <button className="nav-button" onClick={() => navigate('/video')}>📹 Videos</button>
          <button className="nav-button" onClick={() => navigate('/recipes')}>📖 Read Recipes</button>
          <button className="nav-button" onClick={() => navigate('/my-recipes')}>📝 My Recipes</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to Foodie World</h1>

        <div className="top-search-bar">
          <input
            type="text"
            placeholder="Search recipes..."
            className="main-search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="recipe-sections">
          {filteredRecipes ? (
            <section className="recipe-section">
              <h2>Search Results</h2>
              <div className="food-gallery">
                {filteredRecipes.map((item) => (
                  <div className="food-item" key={item.id}>
                    <img src={item.src} alt={item.title} />
                    <p>{item.title}</p>
                    <small>{item.category}</small>
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleRecipeExpansion(item.id)}
                    >
                      {expandedRecipe === item.id ? 'Show Less' : 'Read More'}
                    </button>
                    {expandedRecipe === item.id && (
                      <div className="preparation-steps">
                        <h4>Preparation Steps:</h4>
                        <ol>
                          {item.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
                {filteredRecipes.length === 0 && (
                  <p className="no-results">No recipes found matching your search.</p>
                )}
              </div>
            </section>
          ) : (
            sections.map((section) => (
              <section className="recipe-section" key={section.title}>
                <h2>{section.title}</h2>
                <div className="food-gallery">
                  {section.customImages.map((item) => {
                    const recipeId = `${section.title}-${item.title}`.replace(/\s+/g, '-');
                    return (
                      <div className="food-item" key={recipeId}>
                        <img src={item.src} alt={item.title} />
                        <p>{item.title}</p>
                        <button 
                          className="read-more-btn"
                          onClick={() => toggleRecipeExpansion(recipeId)}
                        >
                          {expandedRecipe === recipeId ? 'Show Less' : 'Read More'}
                        </button>
                        {expandedRecipe === recipeId && (
                          <div className="preparation-steps">
                            <h4>Preparation Steps:</h4>
                            <ol>
                              {getPreparationSteps(item.title).map((step, i) => (
                                <li key={i}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>
      </main>

      {/* Styles */}
      <style>{`
        .home-container {
          display: flex;
          font-family: Arial, sans-serif;
        }

        .sidebar {
          width: 250px;
          transition: width 0.3s ease;
        }

        .sidebar.collapsed {
          width: 80px;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        .user-account {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .user-name {
          font-weight: bold;
        }

        .nav-button {
          display: block;
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          font-size: 1rem;
          background-color: #f0f0f0;
          border: none;
          text-align: left;
          cursor: pointer;
          border-radius: 4px;
          color: black;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .nav-button:hover {
          background-color: #dcdcdc;
          transform: translateX(4px);
          color: black;
        }

        .main-content {
          flex: 1;
          padding: 20px;
        }

        .top-search-bar {
          margin-bottom: 20px;
        }

        .main-search-input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
        }

        .recipe-sections {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .recipe-section h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .food-gallery {
          display: flex;
          overflow-x: auto;
          gap: 15px;
          padding-bottom: 10px;
          scroll-behavior: smooth;
        }

        .food-item {
          width: 200px;
          flex-shrink: 0;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          color: #333;
          position: relative;
        }

        .food-item img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .food-item img:hover {
          transform: scale(1.05);
        }

        .food-item p {
          margin-top: 5px;
          font-size: 1rem;
        }

        .food-item small {
          display: block;
          color: #666;
          font-size: 0.8rem;
          margin-top: 3px;
        }

        .read-more-btn {
          background: #ff8c00;
          color: white;
          border: none;
          padding: 5px 10px;
          margin-top: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
          font-size: 0.9rem;
        }
        
        .read-more-btn:hover {
          background: #e67e00;
        }
        
        .preparation-steps {
          margin-top: 10px;
          padding: 10px;
          background: #f9f9f9;
          border-radius: 5px;
          text-align: left;
          position: absolute;
          z-index: 10;
          width: 100%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .preparation-steps h4 {
          margin-bottom: 5px;
          color: #333;
          font-size: 1rem;
        }
        
        .preparation-steps ol {
          padding-left: 20px;
          margin: 0;
        }
        
        .preparation-steps li {
          margin-bottom: 5px;
          font-size: 0.8rem;
          color: #555;
        }

        .no-results {
          color: #666;
          font-style: italic;
          padding: 20px;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;