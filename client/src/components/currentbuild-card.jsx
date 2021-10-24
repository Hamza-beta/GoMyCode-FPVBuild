import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { onePost } from "../redux/actions/post_action";

function CurrentBuildCard({ el }) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(el);
  // useEffect(() => {
  //   dispatch(onePost(el._id));
  // });
  // const post = useSelector((state) => state.postReducer.post);
  return (
    <main>
      <div>
        <Link to='/buildPost'>
          {" "}
          <div className='buildCardItem'>
            {/*begin of image map here */}
            <div>
              {el &&
                el.photos &&
                el.photos.map(
                  (el) => (
                    <img className=' buildCardImage' src={el.backgroundimage && el.backgroundimage[0].path} alt='a' />
                  )
                  // el.backgroundimage.map((el) => <img src={el.path} className='buildCardImage' alt='' />)
                )}
              {/* <img src={el.backgroundimage} className='buildCardImage' alt='no ' /> */}

              <div className='buildCardItemInfo'>
                <li className='buildCardItemLI'>{el && el.buildname}</li>
                <ul>
                  <li className='buildCardItemLI'></li>
                  <li className='buildCardItemLI'></li>
                </ul>
              </div>
              {/*end of image */}
            </div>
          </div>{" "}
        </Link>
        {/* End of gallery */}
      </div>
      {/* End of container */}
    </main>
  );
}

export default CurrentBuildCard;
