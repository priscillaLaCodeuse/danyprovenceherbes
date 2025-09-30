import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages-app/Error";
import Home from "./pages-app/Home";
import About from "./pages-app/About";
import Products from "./pages-app/Products";
import Contact from "./pages-app/Contact";
import Mentions from "./pages-app/Mentions";
import Cgu from "./pages-app/Cgu";
import SelHerbes from "./pages-app/SelHerbes";
import SelThym from "./pages-app/SelThym";
import SelRomarin from "./pages-app/SelRomarin";
import TrioSel from "./pages-app/TrioSel";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/nos-produits" element={<Products />} />
          <Route path="/sel-herbes" element={<SelHerbes />} />
          <Route path="/sel-thym" element={<SelThym />} />
          <Route path="/sel-romarin" element={<SelRomarin />} />
          <Route path="/trio-sels" element={<TrioSel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Mentions />} />
          <Route path="/cgu" element={<Cgu />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
