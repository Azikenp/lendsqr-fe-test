import { UserDetailsProps } from "../types/allTypes";
import "../scss/Document.scss";
import { formatDate } from "../utils/dateFormatter";

const AppAndSystems = ({ data }: UserDetailsProps) => {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h3>App Data</h3>
        <div className="grid-uno griid">
          <div>
            <span>app version</span>
            <p>{data?.appData.appVersion}</p>
          </div>
          <div>
            <span>user device name</span>
            <p>{data?.appData.device}</p>
          </div>
          <div>
            <span>last login date</span>
            <p>{formatDate(data?.appData.lastLogin.slice(0, 10))}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>System Data</h3>
        <div className="grid-uno griid">
          <div>
            <span>created at</span>
            <p>{formatDate(data?.systemData.createdAt.slice(0, 10))}</p>
          </div>{" "}
          <div>
            <span>updated at</span>
            <p>{formatDate(data?.systemData.updatedAt.slice(0, 10))}</p>
          </div>
          <div>
            <span>last activity</span>
            <p>{formatDate(data?.systemData.lastActivity.slice(0, 10))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAndSystems;
