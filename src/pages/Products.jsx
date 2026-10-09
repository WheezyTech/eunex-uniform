
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WHATSAPP = "254723124731";

const products = [
  {
    title: "School Uniforms",
    image: "photo-1521572163474-6864f9cf17ab",
    description:
      "Uniform solutions for schools and educational institutions.",
  },
  {
    title: "Corporate Uniforms",
    image: "photo-1512436991641-6745cdb1723f",
    description:
      "Professional clothing for businesses and organisations.",
  },
  {
    title: "Reflective Wear",
    image: "photo-1523381210434-271e8be1f52b",
    description:
      "Workwear and visibility clothing enquiries for teams.",
  },
  {
    title: "Caps and Hats",
    image: "photo-1588850561407-ed78c282e89b",
    description:
      "Caps and headwear for teams, events and branding.",
  },
  {
    title: "Capes",
    image: "photo-1551232864-3f0890e580d9",
    description:
      "Capes and custom garment enquiries.",
  },
  {
    title: "Printing and Branding",
    image: "photo-1503342217505-b0a15ec3261c",
    description:
      "Printing, garment branding and custom design enquiries.",
  },
];

export default function Products() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="section-label">OUR RANGE</span>
          <h1>Products & Services</h1>
          <p>Explore our product categories and ask us about your requirements.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Find What Your Team Needs</h2>
          <p>
            Product availability, specifications, customisation and
            quantities can be discussed directly with our team.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-image">
                <img
                  src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={product.title}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a
                  className="text-link"
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    `Hello Eunex Uniforms, I would like to enquire about ${product.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="products-cta">
          <h2>Looking for something specific?</h2>
          <p>Tell us what you need and we can discuss the available options.</p>
          <Link to="/contact" className="button button-dark">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
