import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/News.js";

import React, { useState } from "react";
import { useAppContext } from "../context/appContext.js";

const News = ({
  currentObject,
  author,

  description,
  urlToImage,
  id,
}) => {
  const { removeNews, setCurrentNewsObject } = useAppContext();

  const [readMore, setReadMore] = useState(false);
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  const authorna = "unknown publisher";

  return (
    <Wrapper>
      <Link to={`news/${id}`}>
        <h3
          onClick={() => setCurrentNewsObject(currentObject)}
          className='text'
        >
          {author === null ? authorna : author}
        </h3>
      </Link>
      <div className='row'>
        <div className='column'>
          <div className='card'>
            <img src={urlToImage === null ? url : urlToImage} alt='photo' />
            <p>
              {readMore ? description : `${description.substring(0, 30)}...`}
              <button onClick={() => setReadMore(!readMore)} className='news'>
                {readMore ? "show less" : "  read more"}
              </button>
              <button
                onClick={() => removeNews(currentObject)}
                className='btn-delete'
              >
                delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default News;
