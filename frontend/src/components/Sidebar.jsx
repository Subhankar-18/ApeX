import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        ApeX
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard" className="nav-item">
          <FaHome />
        </NavLink>

        <NavLink to="/items" className="nav-item">
          <FaShoppingCart />
        </NavLink>

        <NavLink to="/categories" className="nav-item">
          <FaBox />
        </NavLink>

        <NavLink to="/users" className="nav-item">
          <FaUsers />
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          <FaCog />
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;