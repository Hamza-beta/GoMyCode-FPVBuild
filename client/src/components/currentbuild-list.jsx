import { useSelector, useDispatch } from "react-redux";
import CurrentBuildCard from "./currentbuild-card";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { currentPost } from "../redux/actions/post_action";
import { onePost } from "../redux/actions/post_action";
function CurrentBuildList() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentPost());
  }, []);
  const currentpost = useSelector((state) => state.postReducer.currentpost);
  return (
    <div className='buildList'>
      {currentpost &&
        currentpost.map((el) => (
          <a onClick={() => dispatch(onePost(el._id))}>
            <CurrentBuildCard el={el} />
          </a>
        ))}
    </div>
  );
}
export default CurrentBuildList;
