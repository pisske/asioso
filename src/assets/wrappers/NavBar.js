import styled from "styled-components";

const Wrapper = styled.nav`
  background: transparent;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(42, 168, 76);
  position: absolute;

  padding-left: 35px;
  h1 {
    margin-left: 100px;
    color: green;
    margin-top: 10px;
  }
  h1:hover {
    color: rgba(3, 252, 69);
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  /* .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */

  .nav-links {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    text-transform: capitalize;
    li:hover {
      margin: 0 0.5rem;
      color: rgb(3, 252, 78);
    }
    a {
      color: #2aa84c;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid rgb(3, 252, 78);
      }
    }
  }
  @media (max-width: 993px) {
    h1 {
      display: none;
    }
  }
  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: right;

      li:hover {
        margin: 0 0.5rem;
        color: rgb(3, 252, 78);
      }
      a {
        color: #2aa84c;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid rgb(3, 252, 78);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Wrapper;
