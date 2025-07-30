import { UserDetailsProps } from "../types/allTypes";
import "../scss/Document.scss";

const Documents = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>Documents</h3>
        <div className="grid-one grid">
          <div>
            <span>nin</span>
            <p>{data?.documents.nin}</p>
          </div>
          <div>
            <span>drivers license</span>
            <p>{data?.documents.driverLicense}</p>
          </div>
          <div>
            <span>passport</span>
            <p>{data?.documents.passport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
