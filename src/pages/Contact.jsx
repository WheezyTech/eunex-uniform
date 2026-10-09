
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "254723124731";

const products = [
  "School Uniforms",
  "Corporate Uniforms",
  "Reflective Wear",
  "Caps and Hats",
  "Capes",
  "Printing and Branding",
  "Other Enquiry",
];

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    product: "School Uniforms",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function buildWhatsAppMessage() {
    return [
      "Hello Eunex Uniforms,",
      "",
      `Name: ${form.user_name}`,
      `Email: ${form.user_email}`,
      `Phone: ${form.user_phone}`,
      `Product/service: ${form.product}`,
      "",
      `Enquiry: ${form.message}`,
    ].join("\n");
  }

  function sendWhatsApp() {
    const message = buildWhatsAppMessage();
    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setStatus(
        "Email is not configured yet. Please use WhatsApp or finish the EmailJS setup."
      );
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: emailConfig.publicKey,
        }
      );

      setStatus(
        "Your email enquiry was sent successfully. Thank you for contacting Eunex Uniforms!"
      );

      setForm({
        user_name: "",
        user_email: "",
        user_phone: "",
        product: "School Uniforms",
        message: "",
      });
    } catch (error) {
      console.error("Email enquiry failed:", error);

      setStatus(
        "We could not send your email. Please try WhatsApp instead."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="contact-page">
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">LET'S TALK</span>
          <h1>Contact Eunex Uniforms</h1>
          <p>
            Tell us what you need. We’ll help you explore
            uniform, reflective wear, printing and branding
            options.
          </p>
        </div>
      </section>

      <section className="container contact-layout">
        <div className="contact-details">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We’re ready to assist</h2>
          <p>
            Send your requirements and we’ll get back to you
            using the contact details you provide.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">
              <Phone size={21} />
            </span>
            <div>
              <h3>Phone / WhatsApp</h3>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>
                +254 723 124 731
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">
              <Mail size={21} />
            </span>
            <div>
              <h3>Email</h3>
              <p>
                Use the enquiry form to contact our configured
                business mailbox.
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">
              <MapPin size={21} />
            </span>
            <div>
              <h3>Location</h3>
              <p>Kenya</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send an enquiry</h2>
          <p className="form-intro">
            Fields marked * are required.
          </p>

          <div className="form-field">
            <label htmlFor="user_name">Full name *</label>
            <input
              id="user_name"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Enter your full name"
              required
              maxLength={100}
            />
          </div>

          <div className="form-field">
            <label htmlFor="user_email">Email address *</label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              value={form.user_email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={254}
            />
          </div>

          <div className="form-field">
            <label htmlFor="user_phone">Phone number *</label>
            <input
              id="user_phone"
              name="user_phone"
              type="tel"
              value={form.user_phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="+254..."
              required
              maxLength={30}
            />
          </div>

          <div className="form-field">
            <label htmlFor="product">Product or service *</label>
            <select
              id="product"
              name="product"
              value={form.product}
              onChange={handleChange}
              required
            >
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Your enquiry *</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe the items, quantities, sizes or branding you need..."
              rows={5}
              required
              maxLength={3000}
            />
          </div>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}

          <button
            className="btn btn-primary contact-submit"
            type="submit"
            disabled={sending}
          >
            <Send size={18} />
            {sending ? "Sending..." : "Send Email Enquiry"}
          </button>

          <button
            className="btn btn-whatsapp contact-submit"
            type="button"
            onClick={sendWhatsApp}
          >
            <MessageCircle size={18} />
            Continue on WhatsApp
          </button>

          <p className="privacy-note">
            Your enquiry details are used to respond to your
            request. Avoid including sensitive personal
            information.
          </p>
        </form>
      </section>
    </main>
  );
}
