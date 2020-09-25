import React from "react";
import Layout from "./Layout/layout";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Statistics from "./Components/Statistics";
import Services from "./Components/Services";
import Features from "./Components/Features";

const App = () => {
  return (
    <Layout>
      <Features />
      <Services />
      <Statistics />
      <News />
      <Footer />
    </Layout>
  );
};

export default App;
