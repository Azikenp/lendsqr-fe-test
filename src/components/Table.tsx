import { UserType } from "../types/allTypes";
import options from "../assets/icons/options.png";
import eye from "../assets/icons/eye.png";
import activateUser from "../assets/icons/activate-user.png";
import blacklistUser from "../assets/icons/blacklist-user.png";
import filter from "../assets/icons/filter-icon.png";
import "../scss/Table.scss";
import { formatDate } from "../utils/dateFormatter";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const tableHeaders = [
  { label: "organization", key: "organization" },
  { label: "username", key: "username" },
  { label: "email", key: "email" },
  { label: "phone number", key: "phoneNumber" },
  { label: "date joined", key: "dateJoined" },
  { label: "status", key: "status" },
];

const Table = ({ data }: { data: UserType[] }) => {
  const [optionsToggle, setOptionsToggle] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const onrowClicked = (id: string) => {
    setOptionsToggle((prev) => !prev);
    setSelectedId(id);
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="thead">
          <tr>
            {tableHeaders.map(({ label, key }) => (
              <th key={key}>
                <div className="header-content">
                  {label} <img src={filter} alt="filter" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.organization}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{`+${user.phoneNumber}`}</td>
              <td>{`${formatDate(user.dateJoined)} 10.00AM`}</td>
              <td>
                <div className={`status ${user.status}`}>{user.status}</div>
              </td>
              <td onClick={() => onrowClicked(user._id)}>
                {optionsToggle && selectedId === user._id ? (
                  <MdOutlineClose />
                ) : (
                  <img src={options} alt="options" />
                )}
              </td>
              {optionsToggle && selectedId === user._id && (
                <div className="options">
                  <div className="options-item">
                    <img src={eye} alt="eye" />
                    <p>View Details</p>
                  </div>
                  <div className="options-item">
                    <img src={blacklistUser} alt="blacklistUser" />
                    <p>Blacklist User</p>
                  </div>
                  <div className="options-item">
                    <img src={activateUser} alt="activateUser" />
                    <p>Activate User</p>
                  </div>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
