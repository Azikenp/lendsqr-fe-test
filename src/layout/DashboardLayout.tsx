import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import './layout.scss'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
