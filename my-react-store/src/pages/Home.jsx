import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Sigma Electronics</h1>
            <p className="hero-subtitle">
              Your Trusted Technology Partner Since 1914
            </p>
            <p className="hero-description">
              Discover premium electronics, cutting-edge accessories, and
              innovative solutions from the most trusted names in technology.
            </p>
            <div className="hero-buttons">
              <Link to="/catalog" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="content-wrapper">
            <h2>Why Choose Sigma Electronics?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Lightning Fast Delivery</h3>
                <p>
                  Get your tech essentials delivered within 24-48 hours with our
                  premium shipping network.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Lifetime Warranty</h3>
                <p>
                  Every product comes with our comprehensive warranty and
                  world-class customer support.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Best Price Guarantee</h3>
                <p>
                  We match any competitor's price and offer exclusive member
                  discounts year-round.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Expert Tech Support</h3>
                <p>
                  Our certified technicians provide 24/7 support for all your
                  technical questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="categories-section">
          <div className="content-wrapper">
            <h2>Explore Our Categories</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-image">🎧</div>
                <h3>Audio</h3>
                <p>
                  Premium wireless headphones, Bluetooth speakers, and
                  high-quality audio equipment for every lifestyle.
                </p>
                <Link to="/catalog" className="category-link">
                  Browse Audio →
                </Link>
              </div>
              <div className="category-card">
                <div className="category-image">⌚</div>
                <h3>Wearables</h3>
                <p>
                  Smart fitness watches, health trackers, and innovative
                  wearable technology to keep you connected.
                </p>
                <Link to="/catalog" className="category-link">
                  Browse Wearables →
                </Link>
              </div>
              <div className="category-card">
                <div className="category-image">🖱️</div>
                <h3>Accessories</h3>
                <p>
                  Essential tech accessories including wireless mice, USB hubs,
                  and productivity-enhancing peripherals.
                </p>
                <Link to="/catalog" className="category-link">
                  Browse Accessories →
                </Link>
              </div>
              <div className="category-card">
                <div className="category-image">🎮</div>
                <h3>Gaming</h3>
                <p>
                  Gaming keyboards, controllers, and professional-grade gaming
                  equipment for competitive players.
                </p>
                <Link to="/catalog" className="category-link">
                  Browse Gaming →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="content-wrapper">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "Outstanding service and quality products. I've been
                    shopping with Sigma Electronics for over 5 years and they
                    never disappoint!"
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">MJ</div>
                  <div className="author-info">
                    <h4>Maria Johnson</h4>
                    <span>Tech Enthusiast</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "The best prices and fastest shipping I've found anywhere.
                    Their customer support team is incredibly knowledgeable
                    too."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">RC</div>
                  <div className="author-info">
                    <h4>Robert Chen</h4>
                    <span>Business Owner</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "Sigma Electronics has been my go-to for all electronics
                    needs. Their warranty service is unmatched in the industry."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">AS</div>
                  <div className="author-info">
                    <h4>Amy Smith</h4>
                    <span>IT Professional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="content-wrapper">
            <h2>Ready to Upgrade Your Tech?</h2>
            <p>
              Join over 500,000 satisfied customers who trust Sigma Electronics
              for their technology needs.
            </p>
            <div className="cta-buttons">
              <Link to="/catalog" className="btn-primary">
                Start Shopping
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="cta-icon">🚚</span>
                <span>Free Shipping Over $50</span>
              </div>
              <div className="cta-feature">
                <span className="cta-icon">💳</span>
                <span>Secure Payment Options</span>
              </div>
              <div className="cta-feature">
                <span className="cta-icon">↩️</span>
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
