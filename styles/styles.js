import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #292929;
  width: 100%;
  height: 67px;

  @media (min-width: ${({ theme }) => theme.ipad}) {
    height: 140px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    justify-content: flex-start !important;
    padding-left: 77px;
  }
`;

export const TitleText = styled.h1`
  font-weight: 100;
  color: #fff;
  border: 1px solid #fff;
  font-size: 18px;
  padding: 5px;
  @media (min-width: ${({ theme }) => theme.ipad}) {
    font-weight: 100;
    color: #fff;
    border: 1px solid #fff;
    font-size: 22px;
    padding: 10px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-weight: 100;
    color: #fff;
    border: 1px solid #fff;
    font-size: 25px;
    padding: 15px;
  }
`;

export const Hero = styled.div`
  height: 267px;
  width: 100vw;
  background: url('/images/bgsm.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.ipad}) {
    height: 550px;
    width: 100vw;
    background: url('/images/bgmd.png');
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 550px;
    width: 100vw;
    background: url('/images/bgbg.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 77px;
  }
`;

export const HeroText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 36.46px;
  color: #fff;
  text-align: center;
  width: 350px;

  @media (min-width: ${({ theme }) => theme.ipad}) {
    font-size: 72px;
    font-weight: 700;
    line-height: 93.74px;
    color: #fff;
    text-align: center;
    width: 390px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 72px;
    font-weight: 700;
    line-height: 93.74px;
    color: #fff;
    text-align: start;
    width: 500px;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 334px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 28px;
`;

export const Box = styled.div`
  margin: 25px 0;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PTag = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Input = styled.input`
  height: 34px;
  width: 265px;
  border-radius: 0px;

  @media (min-width: ${({ theme }) => theme.ipad}) {
    height: 54px;
    top: 35px;
    border-radius: 0px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 54px;
    width: 1106px;
    left: 0px;
    top: 35px;
    border-radius: 0px;
  }
`;

export const MovieSection = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
`;

export const MovieBox = styled.div`
  height: 180px;
  border-radius: 12px;
  padding: 10px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

export const Flex = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.ipad}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Typography = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;
