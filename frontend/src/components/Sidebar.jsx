import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {

return(

<div className="sidebar">

<div className="logo">
<div className="logo-box">A</div>
<span>ApeX</span>
</div>

<ul>

<li>
<NavLink to="/" className="nav-item">
Dashboard
</NavLink>
</li>

<li>
<NavLink to="/explore" className="nav-item">
Explore
</NavLink>
</li>

<li>
<NavLink to="/categories" className="nav-item">
Manage Categories
</NavLink>
</li>

<li>
<NavLink to="/users" className="nav-item">
Manage Users
</NavLink>
</li>

<li>
<NavLink to="/orders" className="nav-item">
Order History
</NavLink>
</li>

<li className="nav-item">
Settings
</li>

</ul>

</div>

)

}

export default Sidebar