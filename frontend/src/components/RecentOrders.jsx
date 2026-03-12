import "../styles/table.css";

function RecentOrders() {
  return (
    <div className="orders">

      <h2>Recent Orders</h2>

      <table>

        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER NAME</th>
            <th>PRODUCTS</th>
            <th>TOTAL PRICE</th>
            <th>PAYMENT STATUS</th>
            <th>DATE</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>ORD-2401</td>
            <td>Rajesh Kumar</td>
            <td>iPhone 15 Pro, AirPods</td>
            <td>₹1,24,999</td>
            <td><span className="paid">Paid</span></td>
            <td>12 Mar 2026</td>
          </tr>

          <tr>
            <td>ORD-2402</td>
            <td>Priya Sharma</td>
            <td>Samsung Galaxy S24</td>
            <td>₹79,999</td>
            <td><span className="pending">Pending</span></td>
            <td>12 Mar 2026</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default RecentOrders;