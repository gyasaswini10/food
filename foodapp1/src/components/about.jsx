import React from 'react';

function About() {
  const containerStyle = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fffdf7',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#bf360c',
  };

  const sectionStyle = {
    marginBottom: '2rem',
  };

  const subHeadingStyle = {
    color: '#d84315',
    marginBottom: '0.5rem',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Me</h1>

      <section style={sectionStyle}>
        <p style={paragraphStyle}>
          Hello and welcome to <strong>Foodie World</strong>! I'm so glad you're here. My name is D.Poornima , and I'm the creator, recipe developer, and food lover behind this space.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Why I Started This Blog</h2>
        <p style={paragraphStyle}>
          I started Foodie World to share my love for simple, wholesome, and delicious home-cooked meals. Growing up in a family where food was the center of every celebration, I learned early on that food is not just fuel — it’s love, culture, and connection.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>What You'll Find Here</h2>
        <p style={paragraphStyle}>
          This blog is my humble attempt to document traditional and modern Indian recipes, cooking tips, and quick hacks for busy lifestyles. Whether you're a beginner or a seasoned home cook, I hope you'll find inspiration here.
        </p>
        <p style={paragraphStyle}>
          From cozy comfort food to festive favorites, everything here is tested in my kitchen and made with love.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>My Cooking Philosophy</h2>
        <p style={paragraphStyle}>
          I believe cooking should be joyful, stress-free, and nourishing. I try to use fresh, seasonal ingredients and stick to recipes that are practical, affordable, and rooted in tradition — with occasional healthy twists!
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Let’s Connect!</h2>
        <p style={paragraphStyle}>
          I'm so grateful for every reader who tries a recipe, shares feedback, or simply stops by. Your love and support keep this blog alive.
        </p>
        <p style={paragraphStyle}>
          Feel free to reach out via the contact page or leave a comment. I’d love to hear from you.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={paragraphStyle}>
          Thank you for being a part of this journey. Let's make cooking fun and flavorful together!
        </p>
        <p style={paragraphStyle}><strong>Happy Cooking!</strong> 😊</p>
      </section>
    </div>
  );
}

export default About;
