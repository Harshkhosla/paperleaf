import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Contact from "./pages/Contact.jsx";
import Certificates from "./pages/Certificates.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductCategory />} />
        {/* <Route path="blog" element={<Blog />} /> */}
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
