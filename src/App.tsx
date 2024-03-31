import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={'about'} />
          <Route path="/contact" element={'contact'} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
