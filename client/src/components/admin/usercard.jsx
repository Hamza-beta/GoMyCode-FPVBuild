import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/authActions";

function UserCard({ el }) {
  //console.log(el);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteUser(el._id));
  };
  return (
    <div>
      <figure class='snip1344'>
        <img
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg'
          alt='profile-sample1'
          class='background'
        />
        <img
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg'
          alt='profile-sample1'
          class='profile'
        />
        <figcaption>
          <h3>
            {el.name}
            <span>User</span>
          </h3>
          <div class='icons'>
            <a href='#' onClick={handleDelete}>
              <i class='ion-android-delete'></i>
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
export default UserCard;
