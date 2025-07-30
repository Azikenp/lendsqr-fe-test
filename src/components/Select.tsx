import { SelectProps } from "../types/allTypes";
import '../scss/Select.scss'

const Select = ({ total, setUsersPerPage }: SelectProps) => {
  return (
    <div className="select-container">
      <p>Showing</p>
      <select onChange={(e) => setUsersPerPage(Number(e.target.value))}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <p>out of {total}</p>
    </div>
  );
};

export default Select;
