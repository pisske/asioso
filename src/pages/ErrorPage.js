import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

export default Error;
