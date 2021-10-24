import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { EditOnePost, editpost, onePost } from "../redux/actions/post_action";

function Editbuild() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(onePost(id, history));
  }, []);
  const editedbuild = useSelector((state) => state.postReducer.post);
  const [buildname, setBuildname] = useState(editedbuild && editedbuild.buildname);
  const [backgroundimage, setBackgroundimage] = useState(editedbuild && editedbuild.backgroundimage);
  const [description, setDescription] = useState(editedbuild && editedbuild.description);
  const [photos, setPhotos] = useState(editedbuild && editedbuild.photos);
  const [partslist, setPartslist] = useState(editedbuild && editedbuild.partslist);
  const dispatch = useDispatch();
  const handleEditbuild = (e) => {
    e.preventDefault();
    dispatch(
      editpost(editedbuild && editedbuild._id, { buildname, backgroundimage, partslist, description, photos }, history)
    );
  };

  return (
    <div>
      <div className='addbuildHead'>
        <h1 className='addbuildTitles'>EDIT YOUR BUILD</h1>
      </div>
      <h4 className='addbuildInfoInput'>Build Photos</h4>
      <div className='addbuildPhotos'>
        <p className='addbuildDragText'>Drag your kwad build photos here or click in this area</p>
        <form className='addbuildDragArea' action='/profile' method='post' enctype='multipart/form-data'>
          <input
            className='addbuildFileButton'
            type='file'
            name='avatar'
            multiple
            onChange={(e) => setPhotos(e.target.files)}
          />
        </form>
      </div>
      <h1 className='addbuildTitles' style={{ marginLeft: "200px", marginTop: "100px", marginBottom: "50px" }}>
        BASIC INFORMATION
      </h1>

      <h4 className='addbuildInfoInput'>Background Photo</h4>
      <div className='addbuildPhotos'>
        <p className='addbuildDragText'>Drag your Main image for the build here or click in this area</p>
        <form className='addbuildDragArea' action='/profile' method='post' enctype='multipart/form-data'>
          <input
            className='addbuildFileButton'
            type='file'
            name='avatar'
            onChange={(e) => setBackgroundimage(e.target.files[0])}
          />
        </form>
      </div>
      <div className='addbuildInfoInput'>
        <h4>Build Name</h4>
        <input
          className='addbuildInputField'
          type='text'
          placeholder='Enter your build name'
          name='bname'
          required
          value={buildname}
          onChange={(e) => setBuildname(e.target.value)}
        />

        <h4> Description</h4>
        <textarea
          className='addbuildInputField'
          type='text'
          placeholder='you can put links to the parts used in your build'
          name='Description'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h4>Parts List</h4>
        <textarea
          className='addbuildInputField'
          type='text'
          placeholder='you can put links to the parts used in your build'
          name='Description'
          required
          value={partslist}
          onChange={(e) => setPartslist(e.target.value)}
        />
      </div>
      <div className='addbuildButtons'>
        <button className='addbuildOneButton' onClick={handleEditbuild}>
          Edit
        </button>
        <button className='addbuildOneButton'>
          <Link to='/profile' className='addbuildOneButton'>
            Cancel
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Editbuild;
