import styled from "styled-components";
const Wrapper = styled.section`
  .text {
    text-align: center;
    margin-top: 45px;
  }

  .img {
    object-fit: cover;
  }
  .img:hover {
    opacity: 0.7;
  }

  .column {
    float: left;
    width: 33.3%;
    padding: 10px 10px;
  }

  /* Remove extra left and right margins, due to padding */
  .row {
    /* margin: 0 -5px; */
    margin: 60px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Responsive columns */
  @media screen and (max-width: 1000px) {
    .column {
      width: 50%;
      display: block;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }

  /* Style the counter cards */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 12px;
    text-align: center;
    background-color: transparent;
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
  }
`;
export default Wrapper;
