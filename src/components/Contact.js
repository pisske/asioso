import Wrapper from "../assets/wrappers/Contact.js";

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Subscribe to our news Letter!</h3>
        <div className='content'>
          <p>
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </p>
          <form
            action='https://formspree.io/f/xyyaprzb'
            method='POST'
            className='contact-form'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
