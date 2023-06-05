import FeatureProduct from "./components/FeatureProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const name = "Parth Store"
  return (
    <>
      <Hero name={name} />
      <FeatureProduct />
      <Services />
      <Trusted />

      <Footer />
    </>
  )
}
export default Home