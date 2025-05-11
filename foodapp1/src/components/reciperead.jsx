import React from 'react';

const RecipeRead = () => {
  const recipes = [
    {
      image: '/images/image1.jpg',
      link: 'https://manjulaskitchen.com/wp-content/uploads/ebook/Manjulas_Kitchen_Best_of_Indian_Vegetarian_Recipes_free_sample.pdf',
    },
    {
      image: '/images/image2.jpg',
      link: 'https://www.scribd.com/document/752551339/Sattvik-Cooking-Hansaji-J-Yogendra-2021-Rupa-Publications-India-9789390918850-6bb5fb13d31e3b2337aadc0f276e2772-Anna-s-Archive',
    },
    {
      image: '/images/image4.jpg',
      link: 'https://www.scribd.com/document/483432346/ayurveda-cooking-book-with-pictures-pdf',
    },
    {
      image: '/images/image1-1.jpg',
      link: 'https://www.scribd.com/document/483432346/ayurveda-cooking-book-with-pictures-pdf',
    },
    {
      image: '/images/image2-2.jpg',
      link: 'https://www.scribd.com/document/483432346/ayurveda-cooking-book-with-pictures-pdf',
    },
    {
      image: '/images/image3-3.jpg',
      link: 'https://www.scribd.com/document/483432346/ayurveda-cooking-book-with-pictures-pdf',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>Recipes from Books</h1>
      </div>
      <div style={styles.imageContainer}>
        {recipes.map((recipe, index) => (
          <a
            key={index}
            href={recipe.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={recipe.image}
              alt={`Recipe Image`}
              style={styles.image}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
  },
  headingContainer: {
    backgroundColor: 'orange',
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    borderRadius: '10px',
  },
  heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '2em',
    margin: 0,
  },
  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '1000px',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default RecipeRead;
