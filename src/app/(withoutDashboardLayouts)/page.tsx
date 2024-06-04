"use client";

import EventSection from "@/components/HomePage/Event/EventSection";
import DonationTips from "@/components/HomePage/Extra/DonationTips";
import Hero from "@/components/HomePage/Hero/Hero";
import InfoSection from "@/components/HomePage/Info/InfoSection";
import RecentDonors from "@/components/HomePage/RecentDonors/RecentDonors";
import ServicesSection from "@/components/HomePage/Services/ServiceSection";
import TestiMonialsSection from "@/components/HomePage/Testimonials/TestiMonialsSection";
import WelcomeSection from "@/components/HomePage/WelcomeSection/Welcome";

export default function Home() {
  return (
  <>
      <Hero />
      <WelcomeSection />
      <InfoSection />
      <RecentDonors />
      <ServicesSection />
      <DonationTips />
      <EventSection />
      <TestiMonialsSection />

  </>

  );
}
