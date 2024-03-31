import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={'/'} />
          <Route path="/about" element={'about'} />
          <Route path="/contact" element={'contcta'} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
