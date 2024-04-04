import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'

function Dashboard() {
    return (
        <div className="dashboard-layout">
            <div className="header">
                <Navbar />
            </div>
            <div className="sider">
                <Sidebar />
            </div>
            <div className="content">
                <Content />
            </div>
        </div>
    )
}

export default Dashboard;
