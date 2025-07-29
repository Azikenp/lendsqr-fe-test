import { useEffect, useState } from "react";
import { usersData } from "../../constants/UsersData";
import DashboardLayout from "../../layout/DashboardLayout";
import "./Users.scss";
import { getUsersFromDB, saveUsersToDB } from "../../lib/indexDB";
import userData from "../../data/users.json";
import { UserType } from "../../types/UserType";
import Table from "../../components/Table";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const init = async () => {
      const saved = await getUsersFromDB();
      const userJson = userData.users as UserType[];

      if (saved.length === 0) {
        await saveUsersToDB(userJson);
        setUsers(userJson);
      } else {
        setUsers(saved);
      }
    };

    init();
  }, []);

  return (
    <DashboardLayout>
      <section className="users-wrapper">
        <div>
          <h3>Users</h3>
          <div className="users-data_wrapper">
            {usersData.map((userData, i) => {
              const { img, title, count } = userData;
              return (
                <div className="users-data" key={i}>
                  <img src={img} alt={`${title} icon`} />
                  <p className="title">{title}</p>
                  <p className="count">{count.toLocaleString()}</p>
                </div>
              );
            })}
          </div>

          <div>
            <Table data={users} />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Users;
