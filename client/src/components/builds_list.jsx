import { useSelector } from "react-redux";
import BuildCard from "./build_card";
import { useHistory } from "react-router-dom";
import { listpost, onePost } from "../redux/actions/post_action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function BuildList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listpost());
  });
  const posts = useSelector((state) => state.postReducer.posts);
  const history = useHistory();
  return (
    <div className='buildList'>
      {posts &&
        posts.map((el, i) => (
          // <a onClick={() => dispatch(onePost(el._id, history))}>
          <BuildCard key={i} el={el} />
          // </a>
        ))}
    </div>
  );
}
export default BuildList;
