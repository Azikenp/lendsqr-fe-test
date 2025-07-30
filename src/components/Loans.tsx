import { UserDetailsProps } from "../types/allTypes";
import "../scss/Document.scss";

const Loans = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>Loans</h3>
        <div className="grid-one grid">
          <div>
            <span>total loans</span>
            <p>₦{data?.loans.totalLoans}</p>
          </div>
          <div>
            <span>last loan date</span>
            <p>{data?.loans.lastLoanDate}</p>
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
