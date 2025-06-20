import './Features.css';

function Features() {
  const features = [
    {
      title: "Voice-based Daily Tasks",
      description: "Complete daily speaking tasks, track your voice streaks, and level up your communication like a pro."
    },
    {
      title: "Structured Levels",
      description: "Progress through 50+ communication levels, from basics to real-world simulations, designed to build skill step by step."
    },
    {
      title: "Gamified Experience",
      description: "Stay motivated with voice streaks, badges, leaderboards, and unlocks that make skill-building feel like a game."
    },
    {
      title: "Real Skills + Certifications",
      description: "Build practical communication skills and earn shareable certificates that strengthen your personal and professional brand."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="section-title">What We Offer</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;