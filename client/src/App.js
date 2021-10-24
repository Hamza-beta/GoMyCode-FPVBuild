import "./App.css";
import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Navbar from "./components/navbar";
import { Route } from "react-router-dom";
import Profile from "./components/profile";
import ProfileRoute from "./privateRoutes/profileRoute";
import Mybuild from "./components/mybuild";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./redux/actions/authActions";
import Addbuild from "./components/addbuild";
import BuildList from "./components/builds_list";
import UserList from "./components/admin/userlist";
import CurrentBuildList from "./components/currentbuild-list";
import BuildPost from "./components/build_post";
import Editbuild from "./components/editbuild";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <ProfileRoute exact path='/profile' component={Profile} />
      <Route exact path='/mybuild' component={Mybuild} />
      <Route exact path='/addbuild' component={Addbuild} />
      <Route exact path='/builds' component={BuildList} />
      <Route exact path='/users' component={UserList} />
      <Route exact path='/currentbuild' component={CurrentBuildList} />
      <Route exact path='/buildPost' component={BuildPost} />
      <Route exact path='/editbuild/:id' component={Editbuild} />
    </div>
  );
}

export default App;
