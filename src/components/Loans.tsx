import { UserDetailsProps } from "../types/allTypes";
import "../scss/Document.scss";
import { formatDate } from "../utils/dateFormatter";

const Loans = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>Loans</h3>
        <div className="grid-uno griid">
          <div>
            <span>total loans</span>
            <p>₦{data?.loans.totalLoans}</p>
          </div>
          <div>
            <span>last loan date</span>
            <p>{formatDate(data?.loans.lastLoanDate)}</p>
          </div>
          <div>
            <span>outsanding loan</span>
            <p>₦{data?.loans.outstanding}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
