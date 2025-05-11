import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Welcome() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const images = [
    { src: '/images/image5.png', title: 'Gulab Jam', desc: 'Gulab jamun is a popular Indian dessert made from milk solids, deep-fried into golden balls, and soaked in a fragrant sugar syrup flavored with rose water and cardamom 1 2. Its often enjoyed during festivals and celebrations .' },
    { src: '/images/image6.png', title: 'Sheer kurma', desc: 'Sheer kurma is a traditional festive pudding made with fine vermicelli, milk, dates, and nuts, often enjoyed during Eid 1 2. This rich Mughlai dessert is known for its creamy texture and aromatic flavors .' },
    { src: '/images/image7.jpg', title: 'Puri ', desc: 'Puri is a deep-fried Indian bread made from unleavened wheat flour dough, often enjoyed with savory curries or sweet dishes 1 2. Its a staple in many Indian households and is especially popular during festivals and special occasions ' },
    { src: '/images/image8.jpg', title: 'Fish curry', desc: 'Fish curry is a flavorful dish where tender fish is simmered in a spicy, aromatic sauce made from ingredients like tomatoes, coconut milk, and various spices 1 2. Its a beloved culinary delight across many cultures, each with its unique twist' },
    { src: '/images/image9.jpg', title: 'Brinjal curry', desc: 'Brinjal curry is a savory dish where eggplants are cooked with onions, tomatoes, and a blend of spices to create a rich, flavorful gravy 1 2. Its a versatile dish enjoyed with rice or Indian breads like chapati and roti' },
    { src: '/images/image10.jpg', title: 'Sel/Nool roti', desc: 'Sel/Nool roti is a traditional Nepalese ring-shaped sweet fried dough made from rice flour, often prepared during festivals like Dashain and Tihar 1 2. Its crispy exterior and soft interior make it a beloved treat in Nepal and parts of India' },
    { src: '/images/image4.jpg', title: 'TBiryani', desc: 'TBiryani is a fragrant, layered rice dish cooked with marinated meat, seafood, or vegetables, and infused with spices like saffron 1 2. This beloved dish has numerous regional variations, each offering a unique blend of flavors' },
    { src: '/images/image11-1.jpg', title: 'Strawberry pastry', desc: 'Strawberry pastry is a delightful dessert made with flaky puff pastry, filled with sweet strawberry jam or fresh strawberries, and often topped with whipped cream 1 2. Its perfect for brunch or as a sweet treat for special occasions ' },
  ];

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="welcome-page">
      {/* Internal CSS for square image gallery */}
      <style>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }
        .gallery-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .gallery-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 5px;
        }
        .gallery-btn {
          margin-top: 10px;
          padding: 5px 10px;
          cursor: pointer;
        }
        .gallery-desc {
          margin-top: 10px;
          color: #555;
        }
      `}</style>

      <header className="app-header">
        <nav className="nav-container">
          <div className="nav-links">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Register</NavLink>
          </div>
        </nav>
      </header>

      <main className="welcome-content">
        <h1>Welcome to the Food Recipe App</h1>
        <p>Search and explore your favorite recipes!</p>

        <div className="gallery">
          {images.map((img, index) => (
            <div key={index} className="gallery-card">
              <img src={img.src} alt={img.title} className="gallery-img" />
              <h4>{img.title}</h4>
              <button 
                onClick={() => toggleReadMore(index)} 
                className="gallery-btn"
              >
                {expandedIndex === index ? 'Hide' : 'Read More'}
              </button>
              {expandedIndex === index && (
                <p className="gallery-desc">{img.desc}</p>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Food Recipe App</p>
      </footer>
    </div>
  );
}

export default Welcome;
