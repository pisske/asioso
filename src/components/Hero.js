import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Hero.js";
import { BsPlayCircleFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      <div className='content'>
        <h1>
          We make digital <br />
          business simple
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
        </p>
        <p>Explore More</p>
        <div className='video-section'>
          <ModalVideo
            channel='youtube'
            autoplay
            isOpen={isOpen}
            videoId='4JDhIo32DUY'
            onClose={() => setOpen(false)}
          />
          <button className='btn-primary btn' onClick={() => setOpen(true)}>
            <BsPlayCircleFill /> Watch Video
          </button>{" "}
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
