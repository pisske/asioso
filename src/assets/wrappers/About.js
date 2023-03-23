import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 5%;
    height: 500px;
    object-fit: cover;
    margin-top: 4rem;

    animation: aboutLeft 3s ease-in-out 1;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 4rem;
    color: var(--clr-grey-5);
    animation: aboutRight 3s ease-in-out 1;
  }
  h2 {
    color: green;
    margin-top: 4rem;
    animation: aboutRight 3s ease-in-out 1;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Wrapper;
