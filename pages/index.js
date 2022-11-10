import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Service from "../components/Service";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Duplo infinito">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <Footer />
    </Layout>
  );
};

export default Index;
