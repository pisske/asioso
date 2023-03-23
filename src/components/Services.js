import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import Wrapper from "../assets/wrappers/Services.js";
const Services = () => {
  return (
    <Wrapper>
      <h1 className='text'>Our focus</h1>
      <div className='row'>
        <div className='column'>
          <div className='card'>
            <h2>Customer</h2>
            <img src={photo1} className='img' alt='img' />
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <h2>Content</h2>
            <img src={photo2} className='img' alt='img' />
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <h2>Touch Points</h2>
            <img src={photo3} className='img' alt='img'></img>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Services;
