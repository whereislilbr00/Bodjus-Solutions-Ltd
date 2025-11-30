import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'Security Passbooks',
    img: '/passbooks.jpg',
    desc: 'High-quality security passbooks for official and ceremonial use.'
  },
  {
    title: 'Company Logo',
    img: '/logo.png',
    desc: 'Bedjos Solutions official logo and branding.'
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-desc">Explore our recent projects in branding, printing, signage, and apparel. See more on our <a href="https://www.facebook.com/BedjosSolutionsLtd" target="_blank" rel="noopener noreferrer">Facebook page</a>.</p>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div className="portfolio-card glass" key={idx}>
            <img src={project.img} alt={project.title} className="portfolio-img" />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-gallery">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBedjosSolutionsLtd&tabs=timeline%2Cphotos%2Cvideos&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="500"
          style={{ border: 'none', overflow: 'hidden', borderRadius: '1rem', marginTop: '2rem' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Bedjos Solutions Facebook Gallery"
        ></iframe>
      </div>
    </section>
  );
}
