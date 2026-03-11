import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>

      <DashboardLayout>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>

      </DashboardLayout>

    </BrowserRouter>
  );
}

export default App;