import styled from "styled-components";

const Wrapper = styled.main`
  .btn-delete {
    color: green;
    border: none;
    cursor: pointer;
  }

  h3 {
    text-align: center;
    box-shadow: inset;
  }
  .news {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: rgba(29, 222, 16);
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 12px;
    text-align: center;
    background-color: #f5f2e8;
    transition: 0.3s;
    border-radius: 10px;
  }
  .card:hover {
    transform: scale(1.02);
  }

  .card:hover {
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.4);
  }

  img {
    border-radius: 10px 10px 10px 10px;
    object-fit: cover;
  }

  @media screen and (max-width: 1000px) {
    .column .img {
      width: 50%;
      display: block;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .column .img {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }

  /* width: 90vw;
  max-width: var(--fixed-width);
  margin: 5rem auto;

  .loading {
    text-align: center;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }

  .single-tour {
    background: var(--clr-white);
    border-radius: var(--radius);
    margin: 2rem 0;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }
  .single-tour:hover {
    box-shadow: var(--dark-shadow);
  }
  .single-tour img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }
  .tour-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .tour-info h4 {
    margin-bottom: 0;
  }
  .single-tour button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--clr-primary-5);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
  }
  .tour-price {
    color: var(--clr-primary-5);
    background: var(--clr-primary-10);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .single-tour footer {
    padding: 1.5rem 2rem;
  }
  .single-tour .delete-btn {
    display: block;
    width: 200px;
    margin: 1rem auto 0 auto;
    color: var(--clr-red-dark);
    letter-spacing: var(--spacing);
    background: transparent;
    border: 1px solid var(--clr-red-dark);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  } */
`;
export default Wrapper;
