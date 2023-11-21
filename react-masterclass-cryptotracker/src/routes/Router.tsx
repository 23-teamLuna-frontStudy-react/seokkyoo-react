import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
