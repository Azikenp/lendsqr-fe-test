import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import "./Layout.scss";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="children-content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
