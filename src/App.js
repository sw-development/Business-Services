import React from "react";
import Layout from "./Layout/layout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import News from "./components/News";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Services />
      <Statistics />
      <News />
      <Footer />
    </Layout>
  );
};

export default App;
