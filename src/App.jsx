
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import PrintingBranding from "./pages/PrintingBranding";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";

function NotFound() {
  return (
    <section className="page-banner">
      <div className="container">
        <span className="section-label">404 ERROR</span>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="button button-dark">Back to Home</a>
      </div>
    </section>
  );
}

function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/printing-branding" element={<PrintingBranding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout />
    </BrowserRouter>
  );
}
