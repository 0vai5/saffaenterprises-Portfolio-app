import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main className="bg-white/80">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={'about'} />
          <Route path="/contact" element={'contact'} />
          <Route path="/quote" element={'quote'}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
