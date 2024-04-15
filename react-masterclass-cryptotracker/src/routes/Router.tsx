import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart";
import Price from "./Price";

interface IRouterProps {
  toggleDark: () => void;
}

function Router({ toggleDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
