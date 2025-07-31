import { useEffect, useMemo, useState } from "react";
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
import UsersDetails from "./UsersDetails";
import { useSearch } from "../../hooks/useSearchHook";
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPAge, setUsersPerPAge] = useState(10);
  const [detailsPage, setDetailsPage] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState(false);
  const [username, setUsername] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [filtering, setFiltering] = useState(false);

  const { searchValue } = useSearch();

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

  const handleFilter = () => {
    if (
      !username &&
      !organization &&
      !email &&
      !date &&
      !phoneNumber &&
      !status
    ) {
      setFilter(true);
      toast.error("Please fill at least one field");
    }
    setFiltering(true);
  };

  const searchedUser = users.filter((user) => {
    const search = searchValue.toLowerCase();
    return (
      user.organization.toLowerCase().includes(search) ||
      user.fullName.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      String(user.phoneNumber).includes(search) ||
      user.status.toLowerCase().includes(search) ||
      user.dateJoined.toLowerCase().includes(search)
    );
  });

  const filteredUsers = users.filter((user) => {
    return (
      (organization
        ? user.organization.toLowerCase().includes(organization.toLowerCase())
        : true) &&
      (username
        ? user.fullName.toLowerCase().includes(username.toLowerCase())
        : true) &&
      (email ? user.email.toLowerCase().includes(email.toLowerCase()) : true) &&
      (phoneNumber ? String(user.phoneNumber).includes(phoneNumber) : true) &&
      (status
        ? user.status.toLowerCase().includes(status.toLowerCase())
        : true) &&
      (date ? user.dateJoined.slice(0, 10).includes(date) : true)
    );
  });

  const usersToDisplayArray = useMemo(() => {
    if (searchValue.trim() !== "") return searchedUser;
    if (filtering) return filteredUsers;
    return users;
  }, [searchValue, filtering, searchedUser, filteredUsers, users]);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      setFiltering(false);
      setUsername("");
      setOrganization("");
      setEmail("");
      setDate("");
      setPhoneNumber("");
      setStatus("");
    }
  }, [searchValue]);

  console.log(date);
  

  const usersToDisplay = usersToDisplayArray;

  const paginatedUsers = usersToDisplay.slice(
    (currentPage - 1) * usersPerPAge,
    currentPage * usersPerPAge
  );

  const totalPages = Math.ceil(usersToDisplay.length / usersPerPAge);

  const detailsData = users?.find((cur) => cur?._id === selectedId);

  const handleDetailsPageRequest = (id: string) => {
    setSelectedId(id);
    setDetailsPage(true);
  };

  if (detailsPage)
    return (
      <DashboardLayout>
        <UsersDetails
          handleClose={() => setDetailsPage(false)}
          data={detailsData}
        />
      </DashboardLayout>
    );

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

          <Table
            fullData={users}
            data={paginatedUsers}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            handleClick={handleDetailsPageRequest}
            filter={filter}
            setFilter={setFilter}
            username={username}
            setUsername={setUsername}
            organization={organization}
            setOrganization={setOrganization}
            email={email}
            setEmail={setEmail}
            date={date}
            setDate={setDate}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            status={status}
            setStatus={setStatus}
            filtering={filtering}
            setFiltering={setFiltering}
            handleFilter={handleFilter}
          />

          <div className="footer-users">
            <Select
              total={usersToDisplay?.length}
              setUsersPerPage={setUsersPerPAge}
            />
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
