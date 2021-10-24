import { useSelector } from "react-redux";
import UserCard from "./usercard";
function UserList() {
  const users = useSelector((state) => state.authReducer.users);
  return (
    <div
      className='userList'
      style={{
        display: "flex",
        flexGrow: "5%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItem: "space-around",
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      {users && users.map((el) => <UserCard el={el} />)}
    </div>
  );
}
export default UserList;
