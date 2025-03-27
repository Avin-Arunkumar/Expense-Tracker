import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Transaction from "./Pages/Transaction";

import Navbar from "./components/Navbar";
import NotFound from "./Pages/NotFound";
import AddTransaction from "./Pages/AddTransaction";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
