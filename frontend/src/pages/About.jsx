import React from "react";
import "../customcss/About.css"; // styling ke liye (agar chahiye to alag CSS bna lena)

function About() {
  return (
    <div className="about-container">
      {/* ---- About Us Section ---- */}
      <section className="about-us">
        <h2>
          ABOUT <span className="highlight">US</span>
        </h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="about"
            />
          </div>
          <div className="about-text">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Why Choose Us ---- */}
      <section className="why-choose">
        <h2>
          WHY <span className="highlight">CHOOSE US</span>
        </h2>
        <div className="choose-grid">
          <div className="choose-card">
            <h4>Quality Assurance:</h4>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="choose-card">
            <h4>Convenience:</h4>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="choose-card">
            <h4>Exceptional Customer Service:</h4>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Subscribe ---- */}
      <section className="subscribe">
        <h2>
          Subscribe now & get <span className="highlight">20% off</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </section>
    </div>
  );
}

export default About;
