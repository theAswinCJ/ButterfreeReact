import React, { Component } from "react";
import "./LandingPage.css";
import IntroSection from "../LandingPageContainers/IntroSection";
import SocialProofSection from "../LandingPageContainers/SocialProofSection";
import WhosItForSection from "../LandingPageContainers/WhosItForSection";
import BenefitsSection from "../LandingPageContainers/BenefitsSection";
import TechnicalProofSection from "../LandingPageContainers/TechnicalProofSection";
import TutorialSection from "../LandingPageContainers/TutorialSection";
import FeaturesSection from "../LandingPageContainers/FeaturesSection";
import FreeTrialSection from "../LandingPageContainers/FreeTrialSection";
import PricingSection from "../LandingPageContainers/PricingSection";
import TestimonialsSection from "../LandingPageContainers/TestimonialsSection";
import FooterSection from "../LandingPageContainers/FooterSection";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <IntroSection />
        <SocialProofSection />
        <WhosItForSection />
        <BenefitsSection />
        <TechnicalProofSection />
        <TutorialSection />
        <FeaturesSection />
        <FreeTrialSection />
        <PricingSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    );
  }
}

export default LandingPage;
