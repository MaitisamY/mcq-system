import '../../styles/dashboard.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'

function Dashboard() {

    document.title = `Dashboard | Student - MCQ's System`

    return (
        <div className="dashboard-layout">
            <div className="sider">
                <Sidebar 
                    type="student"
                />
            </div>
            <div className="content">
                <div className="header">
                    <Navbar />
                </div>
                <Content />
            </div>
        </div>
    )
}

export default Dashboard;
