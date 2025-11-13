"use client";
import "../services.css";
import "../constructions/constructions.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";

export default function OfficeInterior() {
  return (
    <>
      <Nav />
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-hero-content">
            <div className="service-detail-breadcrumb">
              <Copy animateOnScroll={false} delay={0.85}>
                <p className="mono">Services / Office Interior Setup</p>
              </Copy>
            </div>
            <div className="service-detail-header">
              <Copy animateOnScroll={false} delay={1}>
                <h1>Office Interior Setup</h1>
              </Copy>
            </div>
            <div className="service-detail-tagline">
              <Copy animateOnScroll={false} delay={1.15}>
                <p className="lg">
                  Create productive, inspiring workspaces that reflect your company culture, boost employee morale, and impress clients with professional office interiors.
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
                <h2>Workspace Innovation</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  Modern office design goes beyond aesthetics. We create functional, flexible workspaces that adapt to evolving business needs and enhance productivity.
                </p>
              </Copy>
            </div>
            <div className="service-detail-col">
              <div className="service-features">
                <Copy delay={0.2}>
                  <div className="service-feature">
                    <h3>Corporate Offices</h3>
                    <p>Professional office spaces with reception areas, conference rooms, workstations, and executive cabins designed for efficiency.</p>
                  </div>
                </Copy>
                <Copy delay={0.25}>
                  <div className="service-feature">
                    <h3>Co-working Spaces</h3>
                    <p>Flexible co-working environments with hot desks, private cabins, and collaborative zones for modern teams.</p>
                  </div>
                </Copy>
                <Copy delay={0.3}>
                  <div className="service-feature">
                    <h3>Meeting & Conference Rooms</h3>
                    <p>Technology-enabled meeting spaces with acoustic treatment, AV integration, and professional aesthetics.</p>
                  </div>
                </Copy>
                <Copy delay={0.35}>
                  <div className="service-feature">
                    <h3>Breakout & Cafeteria Areas</h3>
                    <p>Comfortable recreational spaces that encourage informal collaboration and employee well-being.</p>
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
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop&q=80" alt="Modern office interior" />
            </div>
            <div className="service-detail-img">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop&q=80" alt="Office workspace design" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-process">
        <div className="container">
          <div className="service-detail-process-header">
            <Copy delay={0.1}>
              <h2>Our Office Setup Process</h2>
            </Copy>
          </div>
          <div className="service-process-grid">
            <Copy delay={0.15}>
              <div className="process-step">
                <div className="process-number">01</div>
                <h3>Needs Assessment</h3>
                <p>Understanding your business, team size, work culture, and specific functional requirements.</p>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <div className="process-step">
                <div className="process-number">02</div>
                <h3>Space Planning</h3>
                <p>Optimal layout design maximizing space utilization, workflow efficiency, and employee comfort.</p>
              </div>
            </Copy>
            <Copy delay={0.25}>
              <div className="process-step">
                <div className="process-number">03</div>
                <h3>Design & Branding</h3>
                <p>Creating interiors that reflect your brand identity with custom color schemes and design elements.</p>
              </div>
            </Copy>
            <Copy delay={0.3}>
              <div className="process-step">
                <div className="process-number">04</div>
                <h3>Furniture & Fit-out</h3>
                <p>Complete fit-out with ergonomic furniture, lighting, electrical, IT infrastructure, and HVAC.</p>
              </div>
            </Copy>
            <Copy delay={0.35}>
              <div className="process-step">
                <div className="process-number">05</div>
                <h3>Final Handover</h3>
                <p>Thorough quality checks and timely handover with minimal disruption to business operations.</p>
              </div>
            </Copy>
          </div>
        </div>
      </section>

      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta-content">
            <Copy delay={0.1}>
              <h2>Design Your Ideal Workspace</h2>
            </Copy>
            <Copy delay={0.15}>
              <p className="lg">
                Let's create an office environment that inspires your team and drives business success with thoughtful design and execution.
              </p>
            </Copy>
            <AnimatedButton label="Discuss Your Project" route="/connect" delay={0.2} />
          </div>
        </div>
      </section>

      <ConditionalFooter />
    </>
  );
}
