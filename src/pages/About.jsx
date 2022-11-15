import React from 'react';
import { AboutSection } from '../components/sections/AboutPage/first/AboutSection';
import OurFeatures from '../components/sections/AboutPage/second/OurFeatures';
import ChooseUs from '../components/sections/AboutPage/thrid/ChooseUs';

export const About = () => {
  return (
    <>
      <ChooseUs />
      <OurFeatures />
      <AboutSection />

    </>
  )
}
