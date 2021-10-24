import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { current, listAllUsers, signout } from "../redux/actions/authActions";
import { Link } from "react-router-dom";
import { currentPost, listpost } from "../redux/actions/post_action";
function Navbar() {
  const auth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  //console.log(user);
  const dispatch = useDispatch();
  return (
    <div className='navbar'>
      <ul className='navUl'>
        {auth && user && user.role === "user" ? (
          <ul className='navUl'>
            <li className='navLi'>
              <a className='nava' href='/'>
                Home
              </a>
            </li>
            <li className='navLi'>
              <Link to='/builds' onClick={() => dispatch(listpost())} className='nava'>
                Builds{" "}
              </Link>
            </li>

            <li className='navLi'>
              <a className='nava' href='/profile' onClick={() => dispatch(current())}>
                My Profile
              </a>
            </li>
            {/*<li>
              <a href='/currentbuild' onClick={() => dispatch(currentPost())}>
                My builds
              </a>
            </li>*/}
            <li className='navLi'>
              <Link to='/addbuild' className='nava'>
                Add Build
              </Link>
            </li>
            <li className='navLi'>
              <a className='nava' href='/' onClick={() => dispatch(signout())}>
                Sign Out{" "}
              </a>
            </li>
          </ul>
        ) : auth && user && user.role == "admin" ? (
          <>
            <ul className='navUl'>
              <li className='navLi'>
                <a className='nava' href='/'>
                  Home
                </a>
              </li>
              <li className='navLi'>
                <Link to='/builds' onClick={() => dispatch(listpost())} className='nava'>
                  Builds{" "}
                </Link>
              </li>
              <li className='navLi'>
                <Link to='/users' onClick={() => dispatch(listAllUsers())} className='nava'>
                  Users{" "}
                </Link>
              </li>

              <li className='navLi'>
                <a className='nava' href='/' onClick={() => dispatch(signout())}>
                  Sign Out{" "}
                </a>
              </li>
            </ul>
          </>
        ) : (
          <ul className='navUl'>
            <li className='navLi'>
              <a className='nava' href='/'>
                Home
              </a>
            </li>
            <li className='navLi'>
              <Link to='/builds' onClick={() => dispatch(listpost())} className='nava'>
                Builds{" "}
              </Link>
            </li>
            <li className='navLi'>
              <a className='nava' href='/signin'>
                Sign In
              </a>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
