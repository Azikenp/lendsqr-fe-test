import { TableProps } from "../types/allTypes";
import options from "../assets/icons/options.png";
import eye from "../assets/icons/eye.png";
import activateUser from "../assets/icons/activate-user.png";
import blacklistUser from "../assets/icons/blacklist-user.png";
import filterImg from "../assets/icons/filter-icon.png";
import "../scss/Table.scss";
import { formatDate } from "../utils/dateFormatter";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import FilterModal from "./modals/FilterModal";

const tableHeaders = [
  { label: "organization", key: "organization" },
  { label: "username", key: "username" },
  { label: "email", key: "email" },
  { label: "phone number", key: "phoneNumber" },
  { label: "date joined", key: "dateJoined" },
  { label: "status", key: "status" },
];

const Table = ({
  data,
  selectedId,
  setSelectedId,
  handleClick,
  filter,
  setFilter,
  username,
  setUsername,
  organization,
  setOrganization,
  email,
  setEmail,
  date,
  setDate,
  phoneNumber,
  setPhoneNumber,
  status,
  setStatus,
  fullData,
  filtering,
  setFiltering,
  handleFilter
}: TableProps) => {
  const [optionsToggle, setOptionsToggle] = useState(true);
  const filterRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedOutsideFilter =
        filterRef.current && !filterRef.current.contains(event.target as Node);
      const clickedOutsideButton =
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node);

      if (filter && clickedOutsideFilter && clickedOutsideButton) {
        setFilter(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filter, setFilter]);

  useEffect(() => {
    setOptionsToggle(false);
  }, []);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="thead">
          <tr>
            {tableHeaders.map(({ label, key }) => (
              <th key={key}>
                <div
                  className={`${
                    label === "organization" && "filter-btn"
                  } header-content`}
                  ref={label === "organization" ? filterButtonRef : undefined}
                  onClick={
                    label === "organization"
                      ? () => setFilter(!filter)
                      : undefined
                  }
                >
                  {label} <img src={filterImg} alt="filter" />
                </div>
                {filter && label === "organization" && (
                  <div ref={filterRef}>
                    <FilterModal
                      data={data}
                      username={username}
                      setUsername={setUsername}
                      organization={organization}
                      setOrganization={setOrganization}
                      email={email}
                      setEmail={setEmail}
                      date={date}
                      setDate={setDate}
                      phoneNumber={phoneNumber}
                      setPhoneNumber={setPhoneNumber}
                      status={status}
                      setStatus={setStatus}
                      fullData={fullData}
                      filtering={filtering}
                      setFiltering={setFiltering}
                      handleFilter={handleFilter}
                      setFilter={setFilter}
                    />
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td className="small-row">{user.organization}</td>
              <td className="medium-row">{user.fullName}</td>
              <td className="big-row">{user.email}</td>
              <td className="medium-row">{`+${user.phoneNumber}`}</td>
              <td className="medium-row">{`${formatDate(
                user.dateJoined
              )} 10.00AM`}</td>
              <td className="small-row">
                <div className={`status ${user.status}`}>{user.status}</div>
              </td>
              <td
                onClick={() => {
                  setOptionsToggle((prev) => !prev);
                  setSelectedId(user._id);
                }}
              >
                {optionsToggle && selectedId === user._id ? (
                  <MdOutlineClose />
                ) : (
                  <img src={options} alt="options" />
                )}
              </td>
              {optionsToggle && selectedId === user._id && (
                <div className="options">
                  <div
                    className="options-item"
                    onClick={() => {
                      handleClick(selectedId);
                    }}
                  >
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
