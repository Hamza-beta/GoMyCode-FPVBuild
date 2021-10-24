import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CurrentBuildList from "./currentbuild-list";

function Profile() {
  const user = useSelector((state) => state.authReducer.user);
  //console.log(user);
  return (
    <div className='profileMain'>
      <ul className='profileList'>
        <li className='profileListItem'>
          <img
            className='ProfilePic'
            src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
            alt=''
          />
        </li>
        <li className='profileListItem'>
          <h1 className='profileUserName'>{user && user.name}</h1>
        </li>
      </ul>
      <h3 className='profileTitleBuilds'> My Builds </h3>
      <div className='profileBuildList'>
        <CurrentBuildList />
      </div>
    </div>
  );
}
export default Profile;
