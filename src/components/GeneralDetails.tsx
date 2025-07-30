import { UserDetailsProps } from "../types/allTypes";
import "../scss/GeneralDetails.scss";

const GeneralDetails = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>Personal Information</h3>
        <div className="grid-one grid">
          <div>
            <span>Full name</span>
            <p>{data?.fullName}</p>
          </div>
          <div>
            <span>phone number</span>
            <p>+{data?.phoneNumber}</p>
          </div>
          <div>
            <span>email address</span>
            <p>{data?.email}</p>
          </div>
          <div>
            <span>bvn</span>
            <p>{data?.bvn}</p>
          </div>
          <div>
            <span>gender</span>
            <p>{data?.gender}</p>
          </div>
          <div>
            <span>marital status</span>
            <p>{data?.fullName}</p>
          </div>
          <div>
            <span>children</span>
            <p>{data?.children}</p>
          </div>
          <div>
            <span>type of residence</span>
            <p>{data?.residenceType}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Education and Employment</h3>
        <div className="grid-two grid">
          <div>
            <span>level of education</span>
            <p>{data?.education}</p>
          </div>
          <div>
            <span>employment status</span>
            <p>{data?.employmentStatus}</p>
          </div>
          <div>
            <span>sector of employment</span>
            <p>{data?.employmentSector}</p>
          </div>
          <div>
            <span>duration of employment</span>
            <p>{data?.employmentDuration}</p>
          </div>
          <div>
            <span>office email</span>
            <p>{data?.officeEmail}</p>
          </div>
          <div>
            <span>monthly income</span>
            <p>{`₦${data?.monthlyIncome[0]} - ₦${data?.monthlyIncome[1]}`}</p>
          </div>
          <div>
            <span>loan repayment</span>
            <p>₦{data?.loanRepayment}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Socials</h3>
        <div className="grid-three grid">
          <div>
            <span>twitter</span>
            <p>{data?.socials.twitter}</p>
          </div>
          <div>
            <span>facebook</span>
            <p>{data?.socials.facebook}</p>
          </div>
          <div>
            <span>instagram</span>
            <p>{data?.socials.instagram}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Guarantor</h3>
        <div className="grid-four grid">
          <div>
            <span>full name</span>
            <p>{data?.guarantor.fullName}</p>
          </div>
          <div>
            <span>phone number</span>
            <p>+{data?.guarantor.phoneNumber}</p>
          </div>
          <div>
            <span>email</span>
            <p>{data?.guarantor.email}</p>
          </div>
          <div>
            <span>relationship</span>
            <p>{data?.guarantor.relationship}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="empty-header"></h3>
        <div className="grid-five grid">
          {" "}
          <div>
            <span>full name</span>
            <p>{data?.secondGuarantor.fullName}</p>
          </div>
          <div>
            <span>phone number</span>
            <p>+{data?.secondGuarantor.phoneNumber}</p>
          </div>
          <div>
            <span>email</span>
            <p>{data?.secondGuarantor.email}</p>
          </div>
          <div>
            <span>relationship</span>
            <p>{data?.secondGuarantor.relationship}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
