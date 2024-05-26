"use client";

import EventSection from "@/components/HomePage/Event/EventSection";
import Hero from "@/components/HomePage/Hero/Hero";
import InfoSection from "@/components/HomePage/Info/InfoSection";
import ServicesSection from "@/components/HomePage/Services/ServiceSection";
import TestiMonialsSection from "@/components/HomePage/Testimonials/TestiMonialsSection";
import WelcomeSection from "@/components/HomePage/WelcomeSection/Welcome";

export default function Home() {
  return (
  <>
      <Hero />
      <WelcomeSection />
      <InfoSection />
      <ServicesSection />
      <EventSection />
      <TestiMonialsSection />

  </>

  );
}
