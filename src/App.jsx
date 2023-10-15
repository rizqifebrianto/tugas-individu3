import { Routes, Route } from "react-router-dom";

import KomponenNavbar from "./components/KomponenNavbar";
import KomponenFooter from "./components/KomponenFooter";

import HalamanHome from "./pages/HalamanHome";
import HalamanAbout from "./pages/HalamanAbout";
import HalamanPortofolio from "./pages/HalamanPortofolio";
import HalamanContact from "./pages/HalamanContact";

function App() {
  return (
    <div>
      <KomponenNavbar />

      <Routes>
        <Route path="/" Component={HalamanHome} />
        <Route path="/about" Component={HalamanAbout} />
        <Route path="/portofolio" Component={HalamanPortofolio} />
        <Route path="/contact" Component={HalamanContact} />
      </Routes>

      <KomponenFooter />
    </div>
  );
}

export default App;
