import { Link } from "react-router-dom";

function BuildCard({ el }) {
  //console.log(el.photos[0]);
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
                    <img className='buildCardImage' src={el.backgroundimage && el.backgroundimage[0].path} alt='a' />
                  )
                  // el.backgroundimage.map((el) => <img src={el.path} className='buildCardImage' alt='' />)
                )}
              <div className='buildCardItemInfo'>
                <li className='buildCardItemLI'>{el.buildname}</li>
              </div>
              {/*end of image */}
            </div>
          </div>
        </Link>
        {/* End of gallery */}
      </div>
      {/* End of container */}
    </main>
  );
}

export default BuildCard;
