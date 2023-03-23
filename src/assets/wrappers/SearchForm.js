import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 15px;

  h5 {
    margin-top: 5px;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    color: green;
  }
  .contact-form {
    width: 50vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 0 auto;
  }

  .button-section {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .search-button {
    background-color: #2aa84c;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 2%;
  }
  .search-button:hover {
    background-color: green;
  }
  .news-bar {
    display: flex;
    align-items: center;
  }

  /* height: 30px;
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  } */
`;

export default Wrapper;
