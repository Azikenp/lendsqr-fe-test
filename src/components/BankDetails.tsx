import { UserDetailsProps } from "../types/allTypes";
import "../scss/Document.scss";

const BankDetails = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>Bank Details</h3>
        <div className="grid-one grid">
          <div>
            <span>account name</span>
            <p>{data?.bankDetails.accountName}</p>
          </div>
          <div>
            <span>bank name</span>
            <p>{data?.bankDetails.bankName}</p>
          </div>
          <div>
            <span>account number</span>
            <p>{data?.bankDetails.accountNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
