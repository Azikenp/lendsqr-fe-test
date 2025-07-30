import { UserDetailsProps } from "../types/allTypes";
import "../scss/Document.scss";

const Savings = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>Savings</h3>
        <div className="grid-one grid">
          <div>
            <span>total savings</span>
            <p>₦{data?.savings.totalSavings}</p>
          </div>
          <div>
            <span>monthly contributions</span>
            <p>₦{data?.savings.monthlyContribution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
