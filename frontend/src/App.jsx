import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Categories from "./pages/Categories";
import Users from "./pages/Users";
import Orders from "./pages/Orders";

function App() {

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/explore" element={<Explore/>}/>
<Route path="/categories" element={<Categories/>}/>
<Route path="/users" element={<Users/>}/>
<Route path="/orders" element={<Orders/>}/>

</Routes>

</BrowserRouter>

)

}

export default App