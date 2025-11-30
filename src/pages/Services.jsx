
import React, { useState } from 'react';
import './Services.css';


const services = [
  {
    title: 'Graphic Design',
    icon: '🎨',
    desc: 'Logos, flyers, posters, and more.',
    price: 'From KES 2,000',
    images: [
      'images/photo 1.jpg',
      'images/photo 3.jpg',
      'images/photo2.jpg'
    ]
  },
  {
    title: 'Branding',
    icon: '🏷️',
    desc: 'Custom branding packages.',
    price: 'From KES 5,000',
    images: [
      'images/bedjos logo.png',
      'images/photo 5.jpg',
      'images/photo6.jpg'
    ]
  },
  {
    title: 'Printing & Signage',
    icon: '🖨️',
    desc: 'Business cards, banners, signage.',
    price: 'From KES 1,500',
    images: [
      'images/photo 7.jpg',
      'images/photo 8.jpg',
      'images/photo 9.jpg'
    ]
  },
  {
    title: 'Security Printing',
    icon: '🔒',
    desc: 'Passbooks, certificates, secure docs.',
    price: 'From KES 3,000',
    images: [
      'images/bedjos  shop.jpg',
      'images/photo 10.jpg',
      'images/photo 11.jpg'
    ]
  },
  {
    title: 'Custom Apparel',
    icon: '👕',
    desc: 'T-shirts, uniforms, promo wear.',
    price: 'From KES 1,200',
    images: [
      'images/photo 12.jpg',
      'images/photo 13.jpg',
      'images/photo 14.jpg',
      'images/photo 15.jpg',
      'images/photo 16.jpg',
      'images/photo 17.jpg',
      'images/photo 18.jpg'
    ]
  }
];

export default function Services() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Business Services</h2>
      <div className="services-list">
        {services.map((service, idx) => (
          <div
            className={`service-card glass${selectedIdx === idx ? ' active' : ''}`}
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            style={{ cursor: 'pointer' }}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <p className="service-price">{service.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedIdx !== null && (
        <div className="service-gallery">
          <h3 style={{ color: '#1565c0' }}>Gallery: {services[selectedIdx].title}</h3>
          <div className="gallery-images">
            {services[selectedIdx].images.map((img, i) => (
              <img
                src={`/${img}`}
                alt={`${services[selectedIdx].title} ${i + 1}`}
                key={i}
                className="service-img"
                style={{ maxWidth: '200px', margin: '0.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(21,101,192,0.15)' }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
