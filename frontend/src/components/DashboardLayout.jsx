import Sidebar from "./Sidebar";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">
        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;