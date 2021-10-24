import axios from "axios";
import { CURRENT_POST, EDITONEPOST, LIST_POST, ONEPOST, POST_ERROR } from "../types/post_types";

export const createpost =
  ({ buildname, description, photos, partslist, backgroundimage }, history) =>
  async (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const formdata = new FormData();
    formdata.append("buildname", buildname);
    formdata.append("backgroundimage", backgroundimage);
    formdata.append("description", description);
    for (var key of Object.keys(photos)) {
      formdata.append("photos", photos[key]);
    }
    formdata.append("photos", photos);

    formdata.append("partslist", partslist);
    try {
      const res = await axios.post("/api/posts/CreatePost", formdata, config);
      //dispatch({ type: CREATE_POST, payload: res.data });
      dispatch(listpost());
      await history.push("/profile");

      //console.log(res);
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.data });
    }
  };

export const editpost =
  (id, { buildname, description, photos, partslist, backgroundimage }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const formdata = new FormData();
    formdata.append("buildname", buildname);
    formdata.append("backgroundimage", backgroundimage);
    formdata.append("description", description);
    for (var key of Object.keys(photos)) {
      formdata.append("photos", photos[key]);
    }
    formdata.append("photos", photos);
    formdata.append("partslist", partslist);
    try {
      const res = await axios.put(`/api/posts/EditPost/${id}`, formdata, config);
      dispatch(onePost(id));
      console.log(res.data.Edited);
    } catch (error) {
      // dispatch({ type: POST_ERROR, payload: error.response.data });
      console.log(error);
    }
  };

export const listpost = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/ListPost");
    dispatch({ type: LIST_POST, payload: res.data.Posts });
    //console.log(res.data.Posts);
  } catch (error) {
    console.log(error);
  }
};
export const currentPost = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/posts/ListUserPost", config);
    dispatch({ type: CURRENT_POST, payload: res.data.ListUserPost });
    console.log(res.data.ListUserPost);
  } catch (error) {
    console.log(error);
  }
};
export const onePost = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/api/posts/OnePost/${id}`, config);

    dispatch({ type: ONEPOST, payload: res.data });

    // history.push("/buildPost");
  } catch (error) {
    console.log(error);
  }
};
export const deletedPost = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(`/api/posts/DeletedPost/${id}`, config);
    dispatch(listpost());
  } catch (error) {
    console.log(error);
  }
};

export const deleteBuild = (id, history) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(`/api/posts/DeletedPost/${id}`, config);
    await history.push("/");
    dispatch(currentPost());
  } catch (error) {
    console.log(error);
  }
};
export const EditOnePost = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/api/posts/EditOnePost/${id}`, config);

    dispatch({ type: EDITONEPOST, payload: res.data.EditOnePost });
  } catch (error) {
    console.log(error);
  }
};
