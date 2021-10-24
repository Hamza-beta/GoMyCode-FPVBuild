import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BuildPost() {
  const onepost = useSelector((state) => state.postReducer.post);
  const auth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  // console.log(onepost.photos);
  return (
    <div>
      {auth && user && user.role === "user" ? (
        <div>
          <ul>
            <h1>{onepost && onepost.buildname}</h1>
            <Link to='/editbuild'>
              <button>edit</button>
            </Link>
            {onepost &&
              onepost.photos.map((el) =>
                el.backgroundimage.map((el) => <img className='buildcardIMG' src={el.path} alt='background' />)
              )}
            <h1>{onepost && onepost.description}</h1>
            {onepost &&
              onepost.photos.map((el) => el.photos.map((el) => <img style={{ width: "40%" }} src={el.path} />))}
            <h1>{onepost && onepost.partslist}</h1>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            <h1>{onepost && onepost.buildname}</h1>
            {onepost &&
              onepost.photos.map((el) =>
                el.backgroundimage.map((el) => <img className='buildcardIMG' src={el.path} alt='background' />)
              )}
            <h1>{onepost && onepost.description}</h1>
            {onepost &&
              onepost.photos.map((el) => el.photos.map((el) => <img style={{ width: "40%" }} src={el.path} />))}
            <h1>{onepost && onepost.partslist}</h1>
          </ul>
        </div>
      )}
    </div>
  );
}
export default BuildPost;
