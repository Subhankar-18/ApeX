import "../styles/statcard.css";
import { FaRupeeSign, FaShoppingCart, FaChartLine, FaBox } from "react-icons/fa";

function StatCard({ title, value, change, type }) {

  const icons = {
    sales: <FaRupeeSign />,
    orders: <FaShoppingCart />,
    revenue: <FaChartLine />,
    products: <FaBox />
  };

  return (
    <div className="stat-card">

      <div className="card-header">

        <div>
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>

        <div className="icon">
          {icons[type]}
        </div>

      </div>

      <p>{change}</p>

    </div>
  );
}

export default StatCard;