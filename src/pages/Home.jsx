
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const products = [
  {
    title: "Reflective Wear",
    description: "Safety vests and reflective workwear for teams.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Uniforms",
    description: "Professional uniforms for schools and businesses.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Caps & Branded Wear",
    description: "Branded caps and apparel for organisations.",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Capes & Other Products",
    description: "Capes and other products to suit your requirements.",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">YOUR UNIFORM & BRANDING PARTNER</span>
          <h1>
            Dress for <span>Confidence.</span>
            <br /> Brand for Success.
          </h1>
          <p>
            Uniforms, reflective wear, caps, capes and printing solutions
            for businesses, schools and organisations across Kenya.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="button button-gold">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="button button-outline">
              Contact Our Team
            </Link>
          </div>
          <div className="hero-note">
            <ShieldCheck size={19} />
            Professional uniform and branding solutions
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-items">
          <div><CheckCircle2 /> Uniform Solutions</div>
          <div><CheckCircle2 /> Printing & Branding</div>
          <div><CheckCircle2 /> Business Enquiries</div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Our Products & Services</h2>
          <p>
            Discover our product range and contact us to discuss your
            requirements and request a quotation.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to="/contact" className="text-link">
                  Make an enquiry <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-more">
          <Link to="/products" className="button button-dark">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
              alt="Professionals working together"
              loading="lazy"
            />
          </div>
          <div className="about-copy">
            <span className="section-label">ABOUT EUNEX UNIFORMS</span>
            <h2>Helping Your Team Look Professional</h2>
            <p>
              We provide uniform, workwear and branding solutions for
              businesses, schools and organisations in Kenya.
            </p>
            <p>
              Contact our team to discuss the products, quantities and
              branding options that suit your needs.
            </p>
            <Link to="/about" className="button button-dark">
              Discover Eunex <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="branding-panel">
          <div className="branding-copy">
            <span className="section-label">PRINTING & BRANDING</span>
            <h2>Make Your Brand Recognisable</h2>
            <p>
              Explore branding options for uniforms, caps and other
              promotional wear.
            </p>
            <Link to="/printing-branding" className="button button-gold">
              Explore Branding <ArrowRight size={18} />
            </Link>
          </div>
          <div className="branding-image">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80"
              alt="Clothing and apparel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
