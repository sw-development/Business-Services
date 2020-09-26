import React from "react";
import Layout from "./Layout/layout";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Statistics from "./Components/Statistics";
import Pricing from "./Components/Pricing";
import News from "./Components/News";
import GetStarted from "./Components/GetStarted";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

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
