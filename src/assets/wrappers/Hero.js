import styled from "styled-components";
const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://t3.ftcdn.net/jpg/03/27/29/32/360_F_327293297_NQ4nlQOaEYo0s5ECRvgrU0YN6qyvkcwy.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  border-bottom-right-radius: 60%;
  border-bottom-left-radius: 10%;

  place-content: center;
  h1 {
    animation: slideFromRight 5s ease-in-out 2;
    color: white;
  }
  p {
    animation: slideFromLeft 5s ease-in-out 2;
    color: white;
  }
  .btn {
    animation: slideFromLeft 5s ease-in-out 2;
  }
  .content {
    margin-top: 150px;
  }

  .video-section {
    display: inline;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      color: white;
    }
    p {
      font-size: 1.25rem;
      color: white;
    }

    .play {
      background: transparent;
      border-radius: 50%;
      border: none;
    }
  }
`;

export default Wrapper;
