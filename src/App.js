import React from "react";
import Layout from "./Layout/layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import News from "./components/News";
import GetStarted from "./components/GetStarted";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Statistics />
      <Pricing />
      <News />
      <GetStarted />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default App;
