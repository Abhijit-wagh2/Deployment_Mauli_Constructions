import React from 'react'
import image1 from '../components/img/home1.png';
import image3 from '../components/img/image3.jpg';
function Hero() {
  return (
    
  <section id="hero" className="hero">
    <div className="info d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center">
            <span className="hero-eyebrow" data-aos="fade-down">
              Trusted Construction Partner
            </span>
            <h2 data-aos="fade-down">
              Build with confidence at Mauli Construction
            </h2>
            <p data-aos="fade-up">
              From planning to handover, we craft durable spaces that reflect your
              lifestyle, budget, and timeline.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
              <a href="#get-started" className="btn-get-started">Get Started</a>
              <a href="/dashboard/admin/product_dummy" className="btn-learn-more">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

  <div className="carousel-item active" style={{backgroundImage: `url(${image1})`}} ></div>
  <div className="carousel-item" style={{backgroundImage: `url(${image3})`}} ></div>
  
  </div>

</section>
  )
}

export default Hero
