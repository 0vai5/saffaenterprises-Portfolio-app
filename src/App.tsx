import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { HomePage, ContactPage, AboutPage } from "./pages";

const App = () => {
  return (
    <main className="bg-white/80">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
