import { SelectProps } from "../types/allTypes";
import "../scss/Select.scss";

const Select = ({ total, setUsersPerPage }: SelectProps) => {
  return (
    <div className="select-container">
      <p>Showing</p>
      <select onChange={(e) => setUsersPerPage(Number(e.target.value))}>
        <option value="10">{total > 10 ? 10 : total}</option>
        {total > 20 && <option value="20">20</option>}
        {total > 30 && <option value="30">30</option>}
      </select>
      <p>out of {total}</p>
    </div>
  );
};

export default Select;
