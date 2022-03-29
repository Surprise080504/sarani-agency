import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../../layout/Footer";
import {
  MainOut,
  ExpText,
  Modelhouse,
  HouseImg,
  HouseText,
  StartRow,
  BuildBtn,
  ArrowRight,
  IncrePart,
  IncreText,
  IncreSubText,
  TrustPart,
  TrustTitle,
  TrustLogos,
  SolutionPart,
  SolutionPartTwoItems,
  SolutionPartItem,
  CircleOut,
  CircleTitle,
  CircleSubTitle,
  SolutionPartTitle,
  SelectedProject,
  BtnContent,
  SelectedTitle,
  SelectedTwo,
  SelectedOne,
  SelectedImg,
  SelectedImgText,
  SelectedImgSubText,
  HolisticPart,
  MixText,
  HolisticText,
  HolBtns,
  AboutusBtn,
  ArrowRightUs
} from "./Main.style";
import Slider from "../../components/slider";
import GotProject from "../../layout/GotProject";
const MainPage = () => {
  return (
    <>
      <MainOut>
        <Header />
        <ExpText>Experiences beyond reality</ExpText>
        <StartRow>
          <Link to='/agency'>
            <Modelhouse>
              <HouseImg
                src="img/modelhouse.png"
                width="150px"
                draggable={false}
              />
              <HouseText>VISIT OUR VIRTUAL AGENCY</HouseText>
            </Modelhouse>
          </Link>
          <Link to='/contact'>
            <BuildBtn>
              START WITH YOUR FIRST PROJECT!
              <ArrowRight>
                <BsArrowRight className="BigRightIcon" />
              </ArrowRight>
            </BuildBtn>
          </Link>
        </StartRow>
      </MainOut>
      <IncrePart>
        <IncreText>
          We create incredible immersive experiences that reflect your brand's
          vision
        </IncreText>
        <IncreSubText>
          Sarani is a holistic experience design agency driven by innovation and
          client satisfaction.
        </IncreSubText>
        <TrustPart>
          <TrustTitle>They trust us</TrustTitle>
          <TrustLogos>
            <Slider />
          </TrustLogos>
        </TrustPart>
      </IncrePart>
      <SolutionPart>
        <SolutionPartTitle>Our solutions</SolutionPartTitle>
        <SolutionPartTwoItems className="Upcircle">
          <CircleOut className="ItemLeft">
            <SolutionPartItem className="CircleItem1">
              <CircleTitle>Art</CircleTitle>
              <CircleSubTitle className="solutionsubtext">
                For artists galleries,
                <br />
                museums, event
                <br />
                venues...
              </CircleSubTitle>
            </SolutionPartItem>
          </CircleOut>
          <CircleOut>
            <SolutionPartItem className="CircleItem2">
              <CircleTitle>Retail</CircleTitle>
              <CircleSubTitle className="solutionsubtext">
                For showrooms,
                <br />
                online stores, pop
                <br />
                up stores...
              </CircleSubTitle>
            </SolutionPartItem>
          </CircleOut>
        </SolutionPartTwoItems>
        <SolutionPartTwoItems className="downcircle">
          <CircleOut className="ItemLeft">
            <SolutionPartItem className="CircleItem3">
              <CircleTitle>Corporate</CircleTitle>
              <CircleSubTitle className="solutionsubtext">
                For B2B environment,
                <br />
                education...
              </CircleSubTitle>
            </SolutionPartItem>
          </CircleOut>
          <CircleOut>
            <SolutionPartItem className="CircleItem4">
              <CircleTitle>Leisure</CircleTitle>
              <CircleSubTitle className="solutionsubtext">
                For restaurants, hotels,
                <br />
                commercial & residential
                <br />
                real estate...
              </CircleSubTitle>
            </SolutionPartItem>
          </CircleOut>
        </SolutionPartTwoItems>
        <SelectedProject>
          <SelectedTitle>Selected projects</SelectedTitle>
          <SelectedTwo>
            <SelectedOne className="selectleft">
              <SelectedImg src="img/home.png" />
              <SelectedImgText>
                Showcasing TEOS Solutions for Sony
              </SelectedImgText>
              <SelectedImgSubText>Corporate workplace</SelectedImgSubText>
            </SelectedOne>
            <SelectedOne className="selectright">
              <SelectedImg src="img/restaurant.png" />
              <SelectedImgText>
                Showcasing TEOS Solutions for Sony
              </SelectedImgText>
              <SelectedImgSubText>Corporate workplace</SelectedImgSubText>
            </SelectedOne>
          </SelectedTwo>
          <SelectedTwo>
            <SelectedOne className="selectleft">
              <SelectedImg src="img/Sony.png" />
              <SelectedImgText>
                Showcasing TEOS Solutions for Sony
              </SelectedImgText>
              <SelectedImgSubText>Corporate workplace</SelectedImgSubText>
            </SelectedOne>
            <SelectedOne className="selectright">
              <SelectedImg src="img/hole.jpg" />
              <SelectedImgText>
                Showcasing TEOS Solutions for Sony
              </SelectedImgText>
              <SelectedImgSubText>Corporate workplace</SelectedImgSubText>
            </SelectedOne>
          </SelectedTwo>
        </SelectedProject>
      </SolutionPart>
      <HolisticPart>
        <HolisticText>
          A holistic design studio for all your creative work
        </HolisticText>
        <MixText />
        <HolBtns>
          <AboutusBtn>
            <BtnContent>
              <span>See our work</span>
              <ArrowRightUs>
                <BsArrowRight className="RightIconYellow" />
              </ArrowRightUs>
            </BtnContent>
          </AboutusBtn>
          <AboutusBtn>
            <BtnContent>
              <span>MORE ABOUT US</span>
              <ArrowRightUs>
                <BsArrowRight className="RightIconYellow" />
              </ArrowRightUs>
            </BtnContent>
          </AboutusBtn>
        </HolBtns>
      </HolisticPart>
      <GotProject backgroundflag={true} />
      <Footer />
    </>
  );
};
export default MainPage;
