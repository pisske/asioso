import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper id='footer'>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Asioso</span>
      </h5>
      <h5>Belgrade Serbia</h5>
    </Wrapper>
  );
};
export default Footer;
