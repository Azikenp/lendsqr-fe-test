import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dashboardRoutes } from "../../constants/SidebarRoutes";
import dropdown from "../../assets/icons/dropdown-feint.png";
import organization from "../../assets/icons/organization.png";
import "../../scss/Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const handleToggle = () => {
    setToggleNavbar((prev) => !prev);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 968) {
      setToggleNavbar(true);
    }
    if (screenWidth < 520) {
      setMobileNavbar(true);
    }
  }, []);

  return (
    <div
      className={`${mobileNavbar ? "mobile-navbar" : "sidebar-wrapper"} ${
        toggleNavbar ? "toggledWidth" : "untoggledWidth"
      }`}
    >
      {!(mobileNavbar && toggleNavbar) && (
        <aside className="sidebar">
          <div className="organization">
            <img src={organization} alt="organization" />
            {!toggleNavbar && <p>switch organization</p>}
            {!toggleNavbar && <img src={dropdown} alt="dropdown" />}
          </div>

          {dashboardRoutes.map((group, groupIndex) => (
            <div key={groupIndex} className="sidebar-group">
              {group.section && !toggleNavbar && (
                <p className="sidebar-header">{group.section}</p>
              )}

              {group.items.map((item, itemIndex) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    to={item.path ?? ""}
                    key={itemIndex}
                    className={`sidebar-link ${isActive ? "active" : ""}`}
                  >
                    <img src={item.icon} alt={`${item.title} icon`} />
                    {!toggleNavbar && <span>{item.title}</span>}
                  </Link>
                );
              })}
            </div>
          ))}
        </aside>
      )}

      <div
        onClick={handleToggle}
        className={`sidebar-toggle ${
          toggleNavbar
            ? "sidebar-toggled_position"
            : "sidebar-untoggled_position"
        }`}
      >
        <img src={dropdown} alt="toggle" />
      </div>
    </div>
  );
};

export default Sidebar;
