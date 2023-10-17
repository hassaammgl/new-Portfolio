import "./styles/app.scss";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loader/Loader";
const PageNotFound = lazy(() => import("./Page404/PageNotFound"));
const Home = lazy(() => import("./components/Home"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={8}
          toastOptions={{
            className: "toast",
            duration: 5000,
          }}
        />
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
