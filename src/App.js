import "./App.css";
import Footer from "./components/footer/footer";

import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/products/Product";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route exact path="/:productId" element={<Product />} />
        <Route exact path="admin" element={<Admin />} />
        {/* <Route index element={<LeagueStandings />} />  */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
