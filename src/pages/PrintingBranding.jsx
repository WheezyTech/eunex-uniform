
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Printer } from "lucide-react";

const WHATSAPP = "254723124731";

export default function PrintingBranding() {
  const message = encodeURIComponent(
    "Hello Eunex Uniforms, I would like to enquire about printing and branding services."
  );

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="section-label">MAKE YOUR BRAND STAND OUT</span>
          <h1>Printing & Branding</h1>
          <p>Branded apparel and uniform solutions for your organisation.</p>
        </div>
      </section>

      <section className="section container">
        <div className="branding-panel">
          <div className="branding-copy">
            <span className="section-label">YOUR BRAND, YOUR IDENTITY</span>
            <h2>Bring Your Brand to Your Uniforms</h2>
            <p>
              Discuss options for adding your organisation's identity to
              uniforms, caps and other suitable apparel.
            </p>

            <ul>
              <li><CheckCircle2 /> Logo printing enquiries</li>
              <li><CheckCircle2 /> Branded caps and apparel</li>
              <li><CheckCircle2 /> Uniform branding</li>
              <li><CheckCircle2 /> Team and organisational orders</li>
            </ul>

            <a
              className="button button-gold"
              href={`https://wa.me/${WHATSAPP}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Your Project <ArrowRight size={18} />
            </a>
          </div>

          <div className="branding-image">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80"
              alt="Clothing and apparel display"
            />
          </div>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <Printer size={30} />
            <h3>Printing</h3>
            <p>
              Ask about printing options suitable for your chosen garments
              and artwork.
            </p>
          </article>
          <article className="value-card">
            <CheckCircle2 size={30} />
            <h3>Custom Branding</h3>
            <p>
              Discuss logo placement, colours, garment types and
              branding requirements.
            </p>
          </article>
          <article className="value-card">
            <ArrowRight size={30} />
            <h3>Bulk Enquiries</h3>
            <p>
              Share your quantities and deadlines to begin a quotation
              discussion.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <div className="container section-heading">
          <span className="section-label">LET'S GET STARTED</span>
          <h2>Have a Branding Project?</h2>
          <p>Contact Eunex Uniforms to discuss your requirements.</p>
          <Link to="/contact" className="button button-dark">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
