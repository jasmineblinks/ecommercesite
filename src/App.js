import "./App.css";
import Footer from "./components/footer/footer";

import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/products/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="/:productId" element={Product} />
          {/* <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
