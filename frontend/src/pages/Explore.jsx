import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Explore()
{
//return <h1 style={{padding:"30px"}}>Explore Page</h1>
return(
    <Sidebar>
        <div className="main">
            <Navbar>
                <div className="content">
                    <h1>Explore</h1>
                </div>
            </Navbar>
        </div>
    </Sidebar>
)
}
export default Explore