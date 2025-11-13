"use client";
import "../services.css";
import "../constructions/constructions.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";

export default function FurnitureDesigns() {
  return (
    <>
      <Nav />
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-hero-content">
            <div className="service-detail-breadcrumb">
              <Copy animateOnScroll={false} delay={0.85}>
                <p className="mono">Services / Furniture Designs</p>
              </Copy>
            </div>
            <div className="service-detail-header">
              <Copy animateOnScroll={false} delay={1}>
                <h1>Custom Furniture Design</h1>
              </Copy>
            </div>
            <div className="service-detail-tagline">
              <Copy animateOnScroll={false} delay={1.15}>
                <p className="lg">
                  Bespoke furniture solutions that combine exceptional craftsmanship, ergonomic design, and timeless aesthetics to create pieces that are truly yours.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-col">
              <Copy delay={0.1}>
                <h2>Craftsmanship Excellence</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  Every piece of furniture we create is a testament to quality craftsmanship, attention to detail, and the perfect blend of form and function.
                </p>
              </Copy>
            </div>
            <div className="service-detail-col">
              <div className="service-features">
                <Copy delay={0.2}>
                  <div className="service-feature">
                    <h3>Custom Furniture</h3>
                    <p>Tailor-made furniture pieces designed specifically for your space, style preferences, and functional requirements.</p>
                  </div>
                </Copy>
                <Copy delay={0.25}>
                  <div className="service-feature">
                    <h3>Modular Solutions</h3>
                    <p>Flexible modular furniture systems that adapt to changing needs and maximize space efficiency.</p>
                  </div>
                </Copy>
                <Copy delay={0.3}>
                  <div className="service-feature">
                    <h3>Built-in Furniture</h3>
                    <p>Custom built-in wardrobes, kitchen cabinets, and storage solutions that seamlessly integrate with your interiors.</p>
                  </div>
                </Copy>
                <Copy delay={0.35}>
                  <div className="service-feature">
                    <h3>Restoration Services</h3>
                    <p>Professional furniture restoration and refinishing to breathe new life into treasured pieces.</p>
                  </div>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-image-section">
        <div className="container">
          <div className="service-detail-images">
            <div className="service-detail-img">
              <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=1200&auto=format&fit=crop&q=80" alt="Custom furniture design" />
            </div>
            <div className="service-detail-img">
              <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&auto=format&fit=crop&q=80" alt="Furniture craftsmanship" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-process">
        <div className="container">
          <div className="service-detail-process-header">
            <Copy delay={0.1}>
              <h2>Our Design & Build Process</h2>
            </Copy>
          </div>
          <div className="service-process-grid">
            <Copy delay={0.15}>
              <div className="process-step">
                <div className="process-number">01</div>
                <h3>Design Brief</h3>
                <p>Understanding your requirements, measuring spaces, and discussing design preferences and materials.</p>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <div className="process-step">
                <div className="process-number">02</div>
                <h3>Concept & Sketches</h3>
                <p>Creating detailed design sketches and 3D models for your review and feedback.</p>
              </div>
            </Copy>
            <Copy delay={0.25}>
              <div className="process-step">
                <div className="process-number">03</div>
                <h3>Material Selection</h3>
                <p>Choosing premium materials, finishes, and hardware that match your aesthetic and budget.</p>
              </div>
            </Copy>
            <Copy delay={0.3}>
              <div className="process-step">
                <div className="process-number">04</div>
                <h3>Fabrication</h3>
                <p>Expert craftsmanship in our workshop with rigorous quality control at every stage.</p>
              </div>
            </Copy>
            <Copy delay={0.35}>
              <div className="process-step">
                <div className="process-number">05</div>
                <h3>Installation</h3>
                <p>Professional installation and final adjustments to ensure perfect fit and finish.</p>
              </div>
            </Copy>
          </div>
        </div>
      </section>

      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta-content">
            <Copy delay={0.1}>
              <h2>Create Your Custom Furniture</h2>
            </Copy>
            <Copy delay={0.15}>
              <p className="lg">
                Bring your furniture vision to life with our expert design and craftsmanship services tailored to your unique needs.
              </p>
            </Copy>
            <AnimatedButton label="Start Your Project" route="/connect" delay={0.2} />
          </div>
        </div>
      </section>

      <ConditionalFooter />
    </>
  );
}
