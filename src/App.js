import React from "react";
import Layout from "./Layout/layout";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Statistics from "./Components/Statistics";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Newsletter from "./Components/Newsletter";

const App = () => {
  return (
    <Layout>
      <Features />
      <Services />
      <Statistics />
      <News />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default App;
