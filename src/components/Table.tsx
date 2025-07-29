import { UserType } from "../types/UserType";

const Table = ({ data }: { data: UserType[] }) => {
  console.log(data);

  return <div>Table</div>;
};

export default Table;
