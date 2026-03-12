import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/Statcard";
import RecentOrders from "../components/RecentOrders";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <h1>Dashboard</h1>
          <p className="subtitle">
            Welcome back! Here's what's happening today.
          </p>

          <div className="stats">

            <StatCard
            title="Today's Sales"
            value="₹4,85,996"
          change="↑ 12.5% vs last week"
          type="sales"
          />

        <StatCard
        title="Today's Orders"
        value="28"
        change="↑ 8.3% vs last week"
        type="orders"
        />

        <StatCard
        title="Total Revenue"
        value="₹12.5L"
        change="↑ 15.2% vs last week"
        type="revenue"
        />

        <StatCard
        title="Total Products"
        value="1,247"
        change="↓ 3.1% vs last week"
        type="products"
        />

          </div>

          <RecentOrders />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;