import { useSelector } from "react-redux";
import { deleteBuild, onePost } from "../redux/actions/post_action";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
function BuildPost() {
  const onepost = useSelector((state) => state.postReducer.post);
  const auth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(onepost);
  // useEffect(() => dispatch(onePost(onepost._id)), [onepost]);
  return (
    <div>
      <div>
        <Link
          to='/profile'
          className='buildPostDeleteButton'
          onClick={() => dispatch(deleteBuild(onepost._id, history))}
        >
          Delete
        </Link>
        <Link to={`/editbuild/${onepost && onepost._id}`} className='buildPostEditButton'>
          Edit
        </Link>
        {onepost &&
          onepost.photos.map((el) =>
            el.backgroundimage.map((el) => <img className='buildPostBackImage' src={el.path} alt='background' />)
          )}
        <h1 className='buildPostName'>{onepost && onepost.buildname}</h1>
        <h1 className='buildPostUser'>{user && user.name}</h1>
      </div>
      <div className='buildPostProfile'>
        <div className='profile-image'>
          <img
            className='buildPostProfilePic'
            src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
            alt=''
          />
        </div>
      </div>
      <h3 className='buildPostDescriptionTitle'>Description</h3>
      <p className='buildPostDescription'>{onepost && onepost.description}</p>
      <h3 className='buildPostPhotosTitle'>Photos</h3>
      <div className='buildPostPhotosGallery'>
        {onepost &&
          onepost.photos.map((el) => el.photos.map((el) => <img className='buildPostOnePhoto' src={el.path} />))}
      </div>
      <h3 className='buildPostPhotosTitle'>Parts Links</h3>
      <h4 className='buildPostPartLinks'>{onepost && onepost.partslist}</h4>
    </div>
  );
}

export default BuildPost;
