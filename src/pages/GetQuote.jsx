
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageCircle, Mail, Send } from "lucide-react";

const WHATSAPP_NUMBER = "254723124731";

const services = [
  "School Uniforms",
  "Corporate Uniforms",
  "Reflective Wear",
  "Caps and Hats",
  "Capes",
  "Printing and Branding",
  "Other",
];

const initialForm = {
  user_name: "",
  user_email: "",
  user_phone: "",
  product: "School Uniforms",
  quantity: "",
  deadline: "",
  message: "",
};

export default function GetQuote() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function buildMessage() {
    return [
      "QUOTE REQUEST — EUNEX UNIFORMS",
      "",
      `Name: ${form.user_name}`,
      `Email: ${form.user_email}`,
      `Phone: ${form.user_phone}`,
      `Product/service: ${form.product}`,
      `Quantity: ${form.quantity || "Not specified"}`,
      `Required by: ${form.deadline || "Not specified"}`,
      "",
      `Requirements: ${form.message}`,
    ].join("\n");
  }

  function sendWhatsApp() {
    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(buildMessage());

    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function sendEmail() {
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus(
        "Email is not configured yet. Please use WhatsApp or configure EmailJS."
      );
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        { publicKey }
      );

      setStatus("Your quote request was sent successfully by email.");
      setForm(initialForm);
    } catch (error) {
      console.error("Quote email failed:", error);
      setStatus(
        "Email could not be sent. Please try the WhatsApp option."
      );
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    sendWhatsApp();
  }

  return (
    <main className="quote-page">
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">REQUEST A QUOTE</span>
          <h1>Tell Us What You Need</h1>
          <p>
            Share your requirements and contact us to discuss
            pricing, quantities and delivery arrangements.
          </p>
        </div>
      </section>

      <section className="container quote-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Quote request form</h2>
          <p className="form-intro">
            Complete the form, then choose email or WhatsApp
            to send your enquiry.
          </p>

          <div className="form-field">
            <label htmlFor="user_name">Full name *</label>
            <input
              id="user_name"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your full name"
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
              required
              maxLength={254}
              placeholder="you@example.com"
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
              required
              maxLength={30}
              placeholder="+254..."
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
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="quantity">Estimated quantity</label>
            <input
              id="quantity"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. 100 uniforms"
              maxLength={100}
            />
          </div>

          <div className="form-field">
            <label htmlFor="deadline">When do you need it?</label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              value={form.deadline}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Describe your requirements *</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              maxLength={3000}
              placeholder="Include sizes, colours, branding, quantities or other details..."
            />
          </div>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-whatsapp contact-submit"
          >
            <MessageCircle size={18} />
            Send Quote via WhatsApp
          </button>

          <button
            type="button"
            className="btn btn-primary contact-submit"
            onClick={sendEmail}
            disabled={sending}
          >
            {sending ? <Mail size={18} /> : <Send size={18} />}
            {sending ? "Sending..." : "Send Quote via Email"}
          </button>

          <p className="privacy-note">
            Choose either option to send your quote request.
            WhatsApp opens a prepared message that you must
            send yourself.
          </p>
        </form>
      </section>
    </main>
  );
}
