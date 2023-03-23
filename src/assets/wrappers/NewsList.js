import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .error-message {
    display: block;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    color: red;
    padding-top: 5px;
  }
  .delete {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 1fr;
    /* 
    justify-content: center; */

    /* grid-template-columns: repeat(3, 1fr); */
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: #49a6e9;
    background: green;
    margin-left: auto;
    margin-right: auto;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Wrapper;
