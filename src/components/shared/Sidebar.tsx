import { dashboardRoutes } from "../../constants/SidebarRoutes";
import dropdown from "../../assets/icons/dropdown-feint.png";
import organization from "../../assets/icons/organization.png";
import "../../scss/Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [toggleNavbar, setToggleNavbar] = useState(true);

  const handleToggle = () => {
    setToggleNavbar(!toggleNavbar)
  };

  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar">
        <div className="organization">
          <img src={organization} alt="organization" />
          <p>switch organization</p>
          <img src={dropdown} alt="dropdown" />
        </div>

        {dashboardRoutes.map((group, groupIndex) => (
          <div key={groupIndex} className="sidebar-group">
            {group.section && <p className="sidebar-header">{group.section}</p>}

            {group.items.map((item, itemIndex) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  to={item.path ?? ""}
                  key={itemIndex}
                  className={`sidebar-link ${isActive ? "active" : ""}`}
                >
                  <img src={item.icon} alt={`${item.title} icon`} />
                  {toggleNavbar && <span>{item.title}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </aside>
      <div onClick={handleToggle} className="sidebar-toggle">
        <img src={dropdown} alt="dropdown" />
      </div>
    </div>
  );
};

export default Sidebar;
