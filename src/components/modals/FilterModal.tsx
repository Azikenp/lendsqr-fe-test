import "../../scss/Filter.scss";
import { TableFilterProps } from "../../types/allTypes";

const FilterModal = ({
  fullData,
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
  handleFilter,
  setFilter,
}: TableFilterProps) => {
  const statusToMap = ["pending", "blacklisted", "inactive", "active"];

  const uniqueOrganizations = Array.from(
    new Set(fullData.map((user) => user.organization))
  );

  return (
    <div className="modal-wrapper">
      <div className="organization">
        <p>Organization</p>
        <select
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        >
          <option value="">Select</option>
          {uniqueOrganizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="username">
        <p>Username</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </div>

      <div className="email">
        <p>Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </div>

      <div className="date">
        <p>Date</p>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
      </div>

      <div className="number">
        <p>Phone Number</p>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
        />
      </div>

      <div className="status">
        <p>Status</p>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select</option>
          {statusToMap.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>

      <div className="button-wrapper">
        <button
          onClick={() => {
            setOrganization("");
            setUsername("");
            setEmail("");
            setDate("");
            setPhoneNumber("");
            setStatus("");
          }}
          className="reset"
        >
          Reset
        </button>
        <button
          className="filter"
          onClick={() => {
            setFilter(false);
            handleFilter();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
