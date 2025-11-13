"use client";
import "./services.css";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import CTAWindow from "@/components/CTAWindow/CTAWindow";

import { servicesData } from "./services-data";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesGridRef = useRef(null);

  useGSAP(
    () => {
      if (!servicesGridRef.current) return;

      const cards = servicesGridRef.current.querySelectorAll(".service-card");

      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 60 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          },
        });
      });
    },
    { scope: servicesGridRef }
  );

  return (
    <>
      <Nav />
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="services-hero-callout">
              <Copy animateOnScroll={false} delay={0.85}>
                <p className="mono">Our Services</p>
              </Copy>
            </div>
            <div className="services-hero-header">
              <Copy animateOnScroll={false} delay={1}>
                <h1>
                  Comprehensive Solutions for Construction, Design & Beyond
                </h1>
              </Copy>
            </div>
            <div className="services-hero-tagline">
              <Copy animateOnScroll={false} delay={1.15}>
                <p className="lg">
                  From groundbreaking construction projects to stunning interior transformations, we deliver excellence across every service we offer. Explore our full range of capabilities designed to bring your vision to life.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-section-header">
            <Copy delay={0.1}>
              <h2>Main Services</h2>
            </Copy>
          </div>
          <div className="services-grid" ref={servicesGridRef}>
            {servicesData.main.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-img">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-specialized">
        <div className="container">
          <div className="services-section-header">
            <Copy delay={0.1}>
              <h2>Specialized Services</h2>
            </Copy>
          </div>
          <div className="services-grid specialized-grid">
            {servicesData.specialized.map((service, index) => (
              <div key={index} className="service-card specialized-card">
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAWindow
        img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80"
        header="Ready to Start Your Project?"
        callout="Let's Build Together"
        description="Whether you need construction, interior design, or custom furniture solutions, our team is ready to transform your vision into reality. Contact us today for a consultation."
      />
      <ConditionalFooter />
    </>
  );
}
