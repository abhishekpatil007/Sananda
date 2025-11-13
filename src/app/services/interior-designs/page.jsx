"use client";
import "../services.css";
import "../constructions/constructions.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";

export default function InteriorDesigns() {
  return (
    <>
      <Nav />
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-hero-content">
            <div className="service-detail-breadcrumb">
              <Copy animateOnScroll={false} delay={0.85}>
                <p className="mono">Services / Interior Designs</p>
              </Copy>
            </div>
            <div className="service-detail-header">
              <Copy animateOnScroll={false} delay={1}>
                <h1>Interior Design Services</h1>
              </Copy>
            </div>
            <div className="service-detail-tagline">
              <Copy animateOnScroll={false} delay={1.15}>
                <p className="lg">
                  Transform your spaces with creative design solutions that blend aesthetics, functionality, and your unique personality into harmonious living environments.
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
                <h2>Design Philosophy</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  We believe interior design is about creating experiences. Our approach combines timeless elegance with modern functionality to craft spaces that inspire and delight.
                </p>
              </Copy>
            </div>
            <div className="service-detail-col">
              <div className="service-features">
                <Copy delay={0.2}>
                  <div className="service-feature">
                    <h3>Residential Interiors</h3>
                    <p>Complete home interior solutions including living rooms, bedrooms, kitchens, and bathrooms designed for comfort and style.</p>
                  </div>
                </Copy>
                <Copy delay={0.25}>
                  <div className="service-feature">
                    <h3>Commercial Interiors</h3>
                    <p>Professional office spaces, retail stores, and hospitality interiors that enhance brand identity and customer experience.</p>
                  </div>
                </Copy>
                <Copy delay={0.3}>
                  <div className="service-feature">
                    <h3>Space Planning</h3>
                    <p>Optimal space utilization with intelligent layout planning, traffic flow analysis, and functional zoning.</p>
                  </div>
                </Copy>
                <Copy delay={0.35}>
                  <div className="service-feature">
                    <h3>Material Selection</h3>
                    <p>Curated selection of premium materials, finishes, colors, and textures that align with your vision and budget.</p>
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
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80" alt="Interior design project" />
            </div>
            <div className="service-detail-img">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop&q=80" alt="Modern interior" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-process">
        <div className="container">
          <div className="service-detail-process-header">
            <Copy delay={0.1}>
              <h2>Our Design Process</h2>
            </Copy>
          </div>
          <div className="service-process-grid">
            <Copy delay={0.15}>
              <div className="process-step">
                <div className="process-number">01</div>
                <h3>Consultation</h3>
                <p>Understanding your lifestyle, preferences, and requirements through detailed discussions and site visits.</p>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <div className="process-step">
                <div className="process-number">02</div>
                <h3>Concept Development</h3>
                <p>Creating mood boards, color palettes, and design concepts that reflect your vision.</p>
              </div>
            </Copy>
            <Copy delay={0.25}>
              <div className="process-step">
                <div className="process-number">03</div>
                <h3>3D Visualization</h3>
                <p>Photorealistic 3D renderings to help you visualize the final design before implementation.</p>
              </div>
            </Copy>
            <Copy delay={0.3}>
              <div className="process-step">
                <div className="process-number">04</div>
                <h3>Implementation</h3>
                <p>Coordinating with contractors and suppliers to bring the design to life with precision.</p>
              </div>
            </Copy>
            <Copy delay={0.35}>
              <div className="process-step">
                <div className="process-number">05</div>
                <h3>Styling & Handover</h3>
                <p>Final styling with decor elements and furniture placement for a complete, move-in ready space.</p>
              </div>
            </Copy>
          </div>
        </div>
      </section>

      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta-content">
            <Copy delay={0.1}>
              <h2>Transform Your Space Today</h2>
            </Copy>
            <Copy delay={0.15}>
              <p className="lg">
                Let our design experts create a personalized interior that reflects your style and enhances your daily living experience.
              </p>
            </Copy>
            <AnimatedButton label="Schedule Consultation" route="/connect" delay={0.2} />
          </div>
        </div>
      </section>

      <ConditionalFooter />
    </>
  );
}
