import styled from "styled-components";
import btn_background from "../../assets/img/button-background.png";

export const Uppart = styled.div`
  width: 100vw;
  background: url("img/greyback.png") no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 100px 100px 100px;
  position: relative;
  @media screen and (max-width: 1390px) {
    padding: 40px 50px 100px 50px !important;
  }
  @media screen and (max-width: 1300px) {
    padding: 40px 30px 100px 30px !important;
  }
  @media screen and (max-width: 560px) {
    padding: 40px 20px 100px 20px !important;
  }
`;
export const ModalItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px !important;
  @media screen and (max-width: 1020px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr !important;
    grid-row-gap: 30px !important;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr !important;
    margin-left: 20px !important;
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr !important;
  }
`;
export const ModalItem = styled.div`
  color: #fff;
  font-size: 16px;
  font-family: Montserrat;
  @media screen and (max-width: 1020px) {
    padding-left: 30% !important;
  }
  @media screen and (max-width: 820px) {
    display: flex !important;
    padding-left: 0 !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
  }
`;
export const OneItemImg = styled.img``;
export const Title = styled.div`
  color: #000;
  font-size: 90px;
  font-family: serif;
  margin: 80px 0;
  font-weight: bold;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 860px) {
    font-size: 60px !important;
  }
  @media screen and (max-width: 590px) {
    font-size: 45px !important;
    text-align: center !important;
    line-height: 45px !important;
  }
`;
export const CorpoItems = styled.div`
  padding: 100px 100px 150px 100px;
  display: flex;
  background: #fff;
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    padding: 100px 50px 150px 50px !important;
  }
  @media screen and (max-width: 1200px) {
    padding: 100px 30px 150px 30px !important;
  }
  @media screen and (max-width: 1150px) {
    display: grid !important;
    grid-template-columns: 1fr !important;
    grid-row-gap: 80px !important;
  }
  @media screen and (max-width: 670px) {
    padding: 100px 60px 150px 60px !important;
  }
  @media screen and (max-width: 670px) {
    padding: 100px 30px 150px 30px !important;
  }
`;
export const CorpoItem = styled.div`
  @media screen and (max-width: 1150px) {
    margin: auto !important;
  }
  @media screen and (max-width: 670px) {
    width: 100% !important;
  }
`;
export const ItemImg = styled.div`
  width: 350px;
  height: 350px;
  background-color: #e2e2e2;
  @media screen and (max-width: 1150px) {
    width: 600px !important;
    height: 500px !important;
  }
  @media screen and (max-width: 670px) {
    width: 100% !important;
  }
  @media screen and (max-width: 600px) {
    height: 400px !important;
  }
  @media screen and (max-width: 480px) {
    height: 300px !important;
  }
  @media screen and (max-width: 400px) {
    height: 300px !important;
  }
`;
export const ItemTitle = styled.div`
  font-family: serif;
  font-weight: 700;
  font-size: 35px;
  margin: 20px 0;
`;
export const ItemText = styled.div`
  font-family: Montserrat;
  font-size: 19px;
  width: 270px;
  color: #000;
  @media screen and (max-width: 400px) {
    width: 100% !important;
  }
`;
export const Applications = styled.div`
  padding: 150px 100px;
  background: url("img/greyback.png") no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 830px) {
    padding: 100px 50px !important;
  }
  @media screen and (max-width: 560px) {
    padding: 100px 30px !important;
  }
`;
export const Diff = styled.div`
  padding: 150px 100px;
  @media screen and (max-width: 830px) {
    padding: 100px 50px !important;
  }
  @media screen and (max-width: 560px) {
    padding: 100px 30px !important;
  }
`;
export const AppTitle = styled.div`
  font-size: 60px;
  font-family: serif;
  font-weight: bold;
  margin-bottom: 30px;
  @media screen and (max-width: 460px) {
    font-size: 40px !important;
    text-align: center !important;
  }
`;
export const AppTextGrp = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #000;
  @media screen and (max-width: 750px) {
    flex-direction: column !important;
    border-style: none !important;
  }
`;
export const AppText = styled.div`
  width: 50%;
  font-family: Montserrat;
  font-size: 20px;
  margin-top: 20px;
  @media screen and (max-width: 750px) {
    border-bottom: 1px solid #000 !important;
    width: 100% !important;
  }
`;
export const TeosPart = styled.div`
  width: 100%;
  margin-top: 200px;
  @media screen and (max-width: 830px) {
    margin-top: 100px !important;
  }
`;
export const TeosTitlePart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 600px) {
    text-align: center !important;
  }
`;
export const TeosTitle = styled.div`
  font-family: serif;
  font-size: 30px;
  font-weight: bold;
  min-width: 350px;
  @media screen and (max-width: 600px) {
    width: 100% !important;
    line-height: 40px !important;
    min-width: 100% !important;
  }
`;
export const TeosText = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  min-width: 180px;
  text-align: right;
  @media screen and (max-width: 830px) {
    display: none !important;
  }
`;
export const TeosLine = styled.div`
  border: 1px solid #000;
  width: 100%;
  @media screen and (max-width: 830px) {
    display: none !important;
  }
`;
export const TeosBack = styled.img`
  width: 100%;
  margin-top: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const TopItemTitle = styled.div`
  font-family: serif;
  font-weight: 900;
  color: #000;
  font-size: 25px;
  width: 180px;
  line-height: 25px;
  margin: 20px 0 10px 0;
`;
export const TopItemText = styled.div`
  font-family: Montserrat;
  color: #000;
  width: 160px;
`;

export const AboutusBtn = styled.div`
  width: 270px;
  height: 70px;
  margin-top: 30px;
  background-image: url(${btn_background});
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: 50px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 450px) {
    width: 320px !important;
    height: 70px !important;
  }
`;
export const BtnContent = styled.div`
  z-index: 99;
  padding-left: 20px;
  background: white;
  width: calc(100% * 0.985);
  height: calc(100% * 0.94);
  border-radius: 45px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: transparent;
  }
  &:hover span {
    color: white;
  }
  span {
    font-size: 23px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left: -80px;
    background: linear-gradient(to right, #883484, #ff9374);
    background-clip: text;
    font-weight: 700;
    -webkit-background-clip: text;
    color: transparent;
    @media screen and (max-width: 450px) {
      font-size: 18px !important;
      margin-left: -80px !important;
    }
  }
`;
export const ArrowRightUs = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: #fff2dc;
  align-items: center;
  color: #000;
  margin-left: 20px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
`;
