import { Link } from "react-router-dom";
import React from "react";

import { useAppContext } from "../context/appContext";
import Loading from "../components/Loading";

import styled from "styled-components";
import { noImage } from "../utils/constants";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const MainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 150px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 5%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .button {
    background-color: green;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const SingleNews = () => {
  const { isLoading, currentNewsObject } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <MainContainer>
        {" "}
        <ContentContainer>
          <ImageContainer>
            <Image
              src={
                currentNewsObject.urlToImage
                  ? currentNewsObject.urlToImage
                  : noImage
              }
              alt='Example Image'
            />
          </ImageContainer>
          <TextContainer>
            <Title>{currentNewsObject.title}</Title>
            <Paragraph>{currentNewsObject.description}</Paragraph>
          </TextContainer>
        </ContentContainer>
      </MainContainer>

      <ButtonContainer>
        <Link style={{ color: "green" }} to='/'>
          Back Home
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
};

export default SingleNews;
