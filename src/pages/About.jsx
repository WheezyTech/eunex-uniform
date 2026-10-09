
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="section-label">GET TO KNOW US</span>
          <h1>About Eunex Uniforms</h1>
          <p>Uniform and branding solutions for businesses and organisations.</p>
        </div>
      </section>

      <section className="section container">
        <div className="about-grid">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating in a professional environment"
            />
          </div>
          <div className="about-copy">
            <span className="section-label">WHO WE ARE</span>
            <h2>Helping Organisations Present Their Best</h2>
            <p>
              Eunex Uniforms is a uniform and branding business serving
              customers in Kenya. Our website introduces our product
              categories and helps customers enquire about their needs.
            </p>
            <p>
              From reflective wear to caps, capes and custom-branded apparel,
              we aim to help customers identify suitable products for their
              teams and organisations.
            </p>
            <Link to="/contact" className="button button-dark">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <Target size={30} />
            <h3>Our Mission</h3>
            <p>
              To provide useful uniform and branding options that meet
              customers' business requirements.
            </p>
          </article>
          <article className="value-card">
            <ShieldCheck size={30} />
            <h3>Our Commitment</h3>
            <p>
              To communicate clearly with customers about product
              requirements, specifications and quotations.
            </p>
          </article>
          <article className="value-card">
            <Users size={30} />
            <h3>Our Customers</h3>
            <p>
              Businesses, schools, institutions, teams and other
              organisations seeking uniform solutions.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
