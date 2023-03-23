import styled from "styled-components";

// const Wrapper = styled.footer`
//   .column {
//     display: grid;
//     float: left;
//     width: 33.33%;
//     padding: 5px;
//     padding-left: 120px;
//     margin-top: 20px;
//   }

//   h4 {
//     color: var(--clr-white);
//     font-weight: bold;

//     font-weight: 200;
//     text-transform: none;
//     line-height: 1.25;
//   }
//   @media screen and (max-width: 1000px) {
//     .column {
//       width: 50%;
//       display: block;
//       margin-bottom: 20px;
//     }
//   }

//   @media screen and (max-width: 600px) {
//     .column {
//       width: 100%;
//       display: block;
//       margin-bottom: 20px;
//     }
//   }
// `;

// export default Wrapper;
const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  background-color: rgb(245, 243, 240);
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Wrapper;
