import React, { Component } from "react";
import "./App.css";
import IntroSection from "./LandingPage/IntroSection/IntroSection";
import BenefitsSection from "./LandingPage/BenefitsSection/BenefitsSection";
import FeaturesSection from "./LandingPage/FeaturesSection/FeaturesSection";
import FooterSection from "./LandingPage/FooterSection/FooterSection";
import FreeTrialSection from "./LandingPage/FreeTrialSection/FreeTrialSection";
import PricingSection from "./LandingPage/PricingSection/PricingSection";
import SocialProofSection from "./LandingPage/SocialProofSection/SocialProofSection";
import TechnicalProofSection from "./LandingPage/TechnicalProofSection/TechnicalProofSection";
import TestimonialsSection from "./LandingPage/TestimonialsSection/TestimonialsSection";
import TutorialSection from "./LandingPage/TutorialSection/TutorialSection";
import WhosItForSection from "./LandingPage/WhosItForSection/WhosItForSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntroSection />
        <SocialProofSection />
        <WhosItForSection />
        <BenefitsSection />
        <TechnicalProofSection />
        <TutorialSection />
        <FeaturesSection />
        <FreeTrialSection />
      </div>
    );
  }
}

export default App;
