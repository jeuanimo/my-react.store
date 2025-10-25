import { useState } from "react";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconSend,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Contact Sigma Electronics</h1>
          <p className="hero-subtitle">Get in Touch with Our Expert Team</p>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <div className="content-wrapper">
            <h2>Visit Our Store</h2>
            <div className="contact-grid">
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <IconMapPin size={32} stroke={1.5} />
                  </div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>
                      12 Brandonwood Drive
                      <br />
                      O'Fallon, IL 62269
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <IconPhone size={32} stroke={1.5} />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>
                      1-800-SIGMA-TECH
                      <br />
                      (1-800-744-6283)
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <IconMail size={32} stroke={1.5} />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>
                      info@sigmaelectronics.com
                      <br />
                      support@sigmaelectronics.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.2891234567!2d-89.9234567!3d38.5789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM0JzQ0LjAiTiA4OcKwNTUnMjQuNSJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sigma Electronics Location - 12 Brandonwood Drive, O'Fallon, IL 62269"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Store Hours Section */}
        <section className="hours-section">
          <div className="content-wrapper">
            <h2>Store Hours</h2>
            <div className="hours-grid">
              <div className="hours-card">
                <h3>Regular Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="hours-card">
                <h3>Holiday Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">New Year's Day</span>
                    <span className="time">Closed</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Thanksgiving</span>
                    <span className="time">Closed</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Christmas Day</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="form-section">
          <div className="content-wrapper">
            <h2>Send Us a Message</h2>
            <div className="form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <IconSend
                    size={18}
                    stroke={1.5}
                    style={{ marginRight: "8px" }}
                  />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-section">
          <div className="content-wrapper">
            <h2>Connect With Us</h2>
            <p>
              Follow Sigma Electronics on social media for the latest updates,
              product launches, and tech tips!
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com/sigmaelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
              >
                <span className="social-icon">
                  <IconBrandFacebook size={24} stroke={1.5} />
                </span>
                <span className="social-text">Facebook</span>
              </a>
              <a
                href="https://twitter.com/sigmaelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <span className="social-icon">
                  <IconBrandTwitter size={24} stroke={1.5} />
                </span>
                <span className="social-text">Twitter</span>
              </a>
              <a
                href="https://instagram.com/sigmaelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <span className="social-icon">
                  <IconBrandInstagram size={24} stroke={1.5} />
                </span>
                <span className="social-text">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/sigmaelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <span className="social-icon">
                  <IconBrandLinkedin size={24} stroke={1.5} />
                </span>
                <span className="social-text">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/sigmaelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
              >
                <span className="social-icon">
                  <IconBrandYoutube size={24} stroke={1.5} />
                </span>
                <span className="social-text">YouTube</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
