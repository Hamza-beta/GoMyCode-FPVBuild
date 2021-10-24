/*import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { current } from "../redux/actions/authActions";
import BuildCard from "./build_card";

function Mybuild() {
  const posts = useSelector((state) => state.postReducer.posts);
  return (
    <div className='card'>
      <div>{posts && posts.map((el) => <BuildCard el={el} />)}</div>
      <p>build details </p>
      <h3>Photos</h3>
     
      <h3>Parts List</h3>
      <h3>Comment</h3>
      <button>
        <Link to='/editbuild'>Edit Build</Link>
      </button>
    </div>
  );
}

export default Mybuild;
*/
