import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<div>Transactions Page</div>} />
          <Route path="accounts" element={<div>Accounts Page</div>} />
          <Route path="investments" element={<div>Investments Page</div>} />
          <Route path="credit-cards" element={<div>Credit Cards Page</div>} />
          <Route path="loans" element={<div>Loans Page</div>} />
          <Route path="services" element={<div>Services Page</div>} />
          <Route path="settings" element={<Settings />} />
          {/* Catch all route - redirects to dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
