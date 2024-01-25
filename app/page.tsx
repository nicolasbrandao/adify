import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import ProductsMenu from "./components/ProductsMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <Posts />
      <Products />
      <ProductsMenu />
      <Stats />
      <Testimonials />
      <ContactForm />
    </>
  );
}
