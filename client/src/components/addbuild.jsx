import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createpost } from "../redux/actions/post_action";

function Addbuild() {
  const [buildname, setBuildname] = useState("");
  const [backgroundimage, setBackgroundimage] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [partslist, setPartslist] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCreatebuild = (e) => {
    e.preventDefault();
    dispatch(createpost({ buildname, description, partslist, photos, backgroundimage }, history));
  };
  return (
    <div>
      <div className='addbuildHead'>
        <h1 className='addbuildTitles'>BULDING A NEW KWAD</h1>
      </div>
      <h4 className='addbuildInfoInput'>Build Photos</h4>
      <div className='addbuildPhotos'>
        <p className='addbuildDragText'>Drag your kwad build photos here or click in this area</p>
        <form className='addbuildDragArea' action='/profile' method='post' enctype='multipart/form-data'>
          <input className='addbuildFileButton' type='file' multiple onChange={(e) => setPhotos(e.target.files)} />
        </form>
      </div>
      <h1 className='addbuildTitles' style={{ marginLeft: "200px", marginTop: "100px", marginBottom: "50px" }}>
        BASIC INFORMATION
      </h1>

      <h4 className='addbuildInfoInput'>Background Photo</h4>
      <div className='addbuildPhotos'>
        <p className='addbuildDragText'>Drag your Main image for the build here or click in this area</p>
        <form className='addbuildDragArea' action='/profile' method='post' enctype='multipart/form-data'>
          <input className='addbuildFileButton' type='file' onChange={(e) => setBackgroundimage(e.target.files[0])} />
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
          style={{ height: "100px" }}
          className='addbuildInputField'
          type='text'
          placeholder='tell us more about your build'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h4>Parts List</h4>
        <textarea
          className='addbuildInputField'
          type='text'
          placeholder='you can put links to the parts used in your build'
          required
          value={partslist}
          onChange={(e) => setPartslist(e.target.value)}
        />
      </div>
      <div className='addbuildButtons'>
        <button onClick={handleCreatebuild} className='addbuildOneButton'>
          <Link className='addbuildOneButton' to='/profile'>
            ADD
          </Link>
        </button>
        <button className='addbuildOneButton'>
          <Link className='addbuildOneButton' to='/profile'>
            Cancel
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Addbuild;
