"use client";
import "../services.css";
import "./constructions.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";

export default function Constructions() {
  return (
    <>
      <Nav />
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-hero-content">
            <div className="service-detail-breadcrumb">
              <Copy animateOnScroll={false} delay={0.85}>
                <p className="mono">Services / Constructions</p>
              </Copy>
            </div>
            <div className="service-detail-header">
              <Copy animateOnScroll={false} delay={1}>
                <h1>Construction Services</h1>
              </Copy>
            </div>
            <div className="service-detail-tagline">
              <Copy animateOnScroll={false} delay={1.15}>
                <p className="lg">
                  Building dreams into reality with precision engineering, quality craftsmanship, and unwavering commitment to excellence in every project we undertake.
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
                <h2>What We Offer</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  Our construction services encompass comprehensive solutions from foundation to finishing, delivering structures that stand the test of time.
                </p>
              </Copy>
            </div>
            <div className="service-detail-col">
              <div className="service-features">
                <Copy delay={0.2}>
                  <div className="service-feature">
                    <h3>Residential Construction</h3>
                    <p>Custom homes, villas, and apartments built with attention to detail and quality materials.</p>
                  </div>
                </Copy>
                <Copy delay={0.25}>
                  <div className="service-feature">
                    <h3>Commercial Buildings</h3>
                    <p>Office complexes, retail spaces, and commercial establishments designed for functionality.</p>
                  </div>
                </Copy>
                <Copy delay={0.3}>
                  <div className="service-feature">
                    <h3>Structural Engineering</h3>
                    <p>Expert structural design and engineering services ensuring safety and durability.</p>
                  </div>
                </Copy>
                <Copy delay={0.35}>
                  <div className="service-feature">
                    <h3>Renovation & Remodeling</h3>
                    <p>Transform existing spaces with comprehensive renovation and remodeling solutions.</p>
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
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80" alt="Construction project" />
            </div>
            <div className="service-detail-img">
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&auto=format&fit=crop&q=80" alt="Construction site" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-process">
        <div className="container">
          <div className="service-detail-process-header">
            <Copy delay={0.1}>
              <h2>Our Construction Process</h2>
            </Copy>
          </div>
          <div className="service-process-grid">
            <Copy delay={0.15}>
              <div className="process-step">
                <div className="process-number">01</div>
                <h3>Site Analysis</h3>
                <p>Comprehensive site evaluation and feasibility studies to ensure optimal construction planning.</p>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <div className="process-step">
                <div className="process-number">02</div>
                <h3>Design & Planning</h3>
                <p>Detailed architectural plans, structural designs, and obtaining necessary approvals.</p>
              </div>
            </Copy>
            <Copy delay={0.25}>
              <div className="process-step">
                <div className="process-number">03</div>
                <h3>Foundation Work</h3>
                <p>Strong foundation laying with quality materials and precise engineering techniques.</p>
              </div>
            </Copy>
            <Copy delay={0.3}>
              <div className="process-step">
                <div className="process-number">04</div>
                <h3>Construction</h3>
                <p>Systematic construction process with regular quality checks and timeline adherence.</p>
              </div>
            </Copy>
            <Copy delay={0.35}>
              <div className="process-step">
                <div className="process-number">05</div>
                <h3>Finishing</h3>
                <p>Final touches, quality inspection, and handover with complete documentation.</p>
              </div>
            </Copy>
          </div>
        </div>
      </section>

      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta-content">
            <Copy delay={0.1}>
              <h2>Ready to Build Your Dream Project?</h2>
            </Copy>
            <Copy delay={0.15}>
              <p className="lg">
                Let's discuss your construction requirements and create a customized solution that exceeds your expectations.
              </p>
            </Copy>
            <AnimatedButton label="Get Started" route="/connect" delay={0.2} />
          </div>
        </div>
      </section>

      <ConditionalFooter />
    </>
  );
}
