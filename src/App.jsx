import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackToTop } from "./Components/BackToTop/BackToTop";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Loading } from "./Components/Loading/Loading";

const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const Work = lazy(() => import("./Pages/Work/Work"));
const BlogPage = lazy(() => import("./Pages/BlogPage/BlogPage"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/collection" element={<Work />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <BackToTop />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
