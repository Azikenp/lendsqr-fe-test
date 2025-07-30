import { useEffect, useState } from "react";
import { usersData } from "../../constants/UsersData";
import DashboardLayout from "../../layout/DashboardLayout";
import "./Users.scss";
import { getUsersFromDB, saveUsersToDB } from "../../lib/indexDB";
import userData from "../../data/users.json";
import { UserType } from "../../types/allTypes";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import CountUp from "react-countup";
import Select from "../../components/Select";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPAge, setUsersPerPAge] = useState(10);

  const totalPages = Math.ceil(users.length / usersPerPAge);
  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPAge,
    currentPage * usersPerPAge
  );

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
  }, [usersPerPAge]);

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
                  <p className="count">
                    <CountUp end={count} duration={1.75} />
                  </p>
                </div>
              );
            })}
          </div>

          <Table data={paginatedUsers} />

          <div className="footer-users">
            <Select total={users?.length} setUsersPerPage={setUsersPerPAge} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                if (page >= 1 && page <= totalPages) setCurrentPage(page);
              }}
            />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Users;
