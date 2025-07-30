import { UserDetailsProps } from "../../types/allTypes";
import goBack from "../../assets/icons/go-back.png";
import person from "../../assets/icons/person.png";
import starFill from "../../assets/icons/starf-fill.png";
import starEmpty from "../../assets/icons/star-empty.png";
import GeneralDetails from "../../components/GeneralDetails";
import { useState } from "react";
import Documents from "../../components/Documents";
import "./UserDetails.scss";
import Loans from "../../components/Loans";
import BankDetails from "../../components/BankDetails";
import Savings from "../../components/Saving";
import AppAndSystems from "../../components/AppAndSystems";

const UsersDetails = ({ data, handleClose }: UserDetailsProps) => {
  const [activeComponent, setActiveComponent] = useState("general-details");

  return (
    <div className="user-details_wrapper">
      <div>
        <div>
          <div onClick={handleClose} className="go-back">
            <img src={goBack} alt="go-back" />
            <p>Back To Users</p>
          </div>

          <div className="header">
            <h3>User Details</h3>
            <div>
              <button className="blacklist">blacklist user</button>
              <button className="activate">activate user</button>
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="profile-details">
            <div className="profile-img_div">
              <img src={person} alt="person" />
            </div>

            <div className="fullname-div">
              <p>{data?.fullName}</p>
              <span>LSQFf587g90</span>
            </div>

            <div className="users-tier">
              <p>User's Tier</p>
              <div>
                <img src={starFill} alt="starFill" />
                <img src={starEmpty} alt="starempty" />
                <img src={starEmpty} alt="starempty" />
              </div>
            </div>

            <div className="salary">
              <p className="amount">{`₦${data?.monthlyIncome[0]}`}</p>
              <div>
                <p>{`${data?.bankDetails.accountNumber}/${data?.bankDetails.bankName}`}</p>
              </div>
            </div>
          </div>

          <div className="navigation">
            <div
              id="general-details"
              onClick={() => setActiveComponent("general-details")}
              className={`navigation-div ${
                activeComponent === "general-details" && "active"
              }`}
            >
              <p>General Details</p>
            </div>
            <div
              id="documents"
              onClick={() => setActiveComponent("documents")}
              className={`navigation-div ${
                activeComponent === "documents" && "active"
              }`}
            >
              <p>Documents</p>
            </div>
            <div
              id="bank-details"
              onClick={() => setActiveComponent("bank-details")}
              className={`navigation-div ${
                activeComponent === "bank-details" && "active"
              }`}
            >
              <p>Bank Details</p>
            </div>
            <div
              id="loans"
              onClick={() => setActiveComponent("loans")}
              className={`navigation-div ${
                activeComponent === "loans" && "active"
              }`}
            >
              <p>Loans</p>
            </div>
            <div
              id="savings"
              onClick={() => setActiveComponent("savings")}
              className={`navigation-div ${
                activeComponent === "savings" && "active"
              }`}
            >
              <p>Savings</p>
            </div>
            <div
              id="app-and-system"
              onClick={() => setActiveComponent("app-and-system")}
              className={`navigation-div ${
                activeComponent === "app-and-system" && "active"
              }`}
            >
              <p>App and Systems</p>
            </div>
          </div>
        </div>
      </div>

      {activeComponent === "general-details" && <GeneralDetails data={data} />}
      {activeComponent === "documents" && <Documents data={data} />}
      {activeComponent === "bank-details" && <BankDetails data={data} />}
      {activeComponent === "loans" && <Loans data={data} />}
      {activeComponent === "savings" && <Savings data={data} />}
      {activeComponent === "app-and-system" && <AppAndSystems data={data} />}
    </div>
  );
};

export default UsersDetails;
