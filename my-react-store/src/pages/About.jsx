import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>About Sigma Electronics</h1>
          <p className="hero-subtitle">Powering Innovation Since 1914</p>
        </section>

        {/* Company Story */}
        <section className="story-section">
          <div className="content-wrapper">
            <h2>Our Story</h2>
            <p>
              Founded in 1914 by visionary entrepreneur Jeuan Mitchell, Sigma
              Electronics began as a pioneering electrical components workshop.
              Today, we're a leading retailer of cutting-edge electronics,
              serving over 500,000 customers worldwide with premium products and
              exceptional service.
            </p>
            <p>
              From humble beginnings to becoming a trusted name in electronics
              retail, our journey has been driven by an unwavering commitment to
              quality, innovation, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="values-section">
          <div className="content-wrapper">
            <h2>Our Mission & Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3>Innovation First</h3>
                <p>
                  We bring you the latest technology and cutting-edge
                  electronics to keep you ahead of the curve.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💎</div>
                <h3>Quality Assured</h3>
                <p>
                  Every product is carefully curated and tested to meet our high
                  standards of excellence.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Customer First</h3>
                <p>
                  Your satisfaction is our priority. We provide exceptional
                  support and service every step of the way.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Sustainable Future</h3>
                <p>
                  We're committed to eco-friendly practices and supporting a
                  sustainable electronics ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-section">
          <div className="content-wrapper">
            <h2>By the Numbers</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">110+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Products Available</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Top Brands</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="content-wrapper">
            <h2>Meet Our Leadership</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">JM</div>
                <h3>Jeuan Mitchell</h3>
                <p className="member-title">Founder & Owner</p>
                <p>
                  Visionary entrepreneur who established Sigma Electronics in
                  1914, pioneering electrical innovation for over a century.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">SR</div>
                <h3>Sarah Rodriguez</h3>
                <p className="member-title">CEO & President</p>
                <p>
                  Technology strategist and former Google product manager
                  leading the company's modern digital transformation.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">DK</div>
                <h3>David Kim</h3>
                <p className="member-title">VP of Operations</p>
                <p>
                  Supply chain expert ensuring seamless product delivery and
                  inventory management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-section">
          <div className="content-wrapper">
            <h2>Ready to Experience Sigma Excellence?</h2>
            <p>
              Join thousands of satisfied customers who trust Sigma Electronics
              for their tech needs.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> info@sigmaelectronics.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> 1-800-SIGMA-TECH
              </div>
              <div className="contact-item">
                <strong>Address:</strong> 1234 Innovation Drive, San Jose, CA
                95110
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default About;
