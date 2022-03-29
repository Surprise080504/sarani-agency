import React from "react";
import Header from "../../layout/HeaderDark";
import Footer from "../../layout/Footer";
import GotProject from "../../layout/GotProject";
import { BsArrowRight } from "react-icons/bs";
import {
  Uppart,
  Title,
  CorpoItems,
  CorpoItem,
  ItemImg,
  ItemTitle,
  ItemText,
  Applications,
  AppTitle,
  AppTextGrp,
  AppText,
  TeosPart,
  TeosTitlePart,
  TeosTitle,
  TeosText,
  TeosLine,
  TeosBack,
  ModalItems,
  ModalItem,
  OneItemImg,
  TopItemTitle,
  TopItemText,
  AboutusBtn,
  BtnContent,
  ArrowRightUs,
  Diff,
  Difftable,
  DiffText,
  Difftitle,
  DifftableOut,
} from "./offer.style";
export default function index() {
  return (
    <>
      <Uppart>
        <Header />
        <Title>Why virtualization?</Title>
        <ModalItems>
          <ModalItem>
            <OneItemImg src="img/agency/ttt.png" />
            <br />
            <TopItemTitle>Tailor-made environment</TopItemTitle>
            <TopItemText>
              to offer a unique experience for your visitors
            </TopItemText>
          </ModalItem>
          <ModalItem>
            <OneItemImg src="img/agency/ttt.png" />
            <br />
            <TopItemTitle>Immersive and interactive</TopItemTitle>
            <TopItemText>universe to leave no room for doubt</TopItemText>
          </ModalItem>
          <ModalItem>
            <OneItemImg src="img/agency/ttt.png" />
            <br />
            <TopItemTitle>An excellent sales tool</TopItemTitle>
            <TopItemText>to convert leads and generate sales</TopItemText>
          </ModalItem>
          <ModalItem>
            <OneItemImg src="img/agency/ttt.png" />
            <br />
            <TopItemTitle>Accessible from anywhere</TopItemTitle>
            <TopItemText>anytime, always operational</TopItemText>
          </ModalItem>
        </ModalItems>
      </Uppart>
      <Diff>
        <AppTitle>Three different technologies</AppTitle>
        <DifftableOut>
          <Difftable>
            <Difftitle>Design Studio</Difftitle>
            <DiffText>Universities</DiffText>
          </Difftable>
        </DifftableOut>
      </Diff>
      <CorpoItems>
        <CorpoItem>
          <ItemImg />
          <AboutusBtn>
            <BtnContent>
              <span>SEE EXAMPLE</span>
              <ArrowRightUs>
                <BsArrowRight className="RightIconYellow" />
              </ArrowRightUs>
            </BtnContent>
          </AboutusBtn>
        </CorpoItem>
        <CorpoItem>
          <ItemImg />
          <AboutusBtn>
            <BtnContent>
              <span>SEE EXAMPLE</span>
              <ArrowRightUs>
                <BsArrowRight className="RightIconYellow" />
              </ArrowRightUs>
            </BtnContent>
          </AboutusBtn>
        </CorpoItem>
        <CorpoItem>
          <ItemImg />
          <AboutusBtn>
            <BtnContent>
              <span>SEE EXAMPLE</span>
              <ArrowRightUs>
                <BsArrowRight className="RightIconYellow" />
              </ArrowRightUs>
            </BtnContent>
          </AboutusBtn>
        </CorpoItem>
      </CorpoItems>
      <Applications>
        <AppTitle>Applications</AppTitle>
        <AppTextGrp>
          <AppText>Design Studio</AppText>
          <AppText>Universities</AppText>
        </AppTextGrp>
        <AppTextGrp>
          <AppText>Tech company</AppText>
          <AppText>Workshop</AppText>
        </AppTextGrp>
        <TeosPart>
          <TeosTitlePart>
            <TeosTitle>TEOS Solutions for Sony</TeosTitle>
            <TeosLine />
            <TeosText>Related project</TeosText>
          </TeosTitlePart>
          <TeosBack src="img/home.PNG" />
        </TeosPart>
      </Applications>
      {/* <GotProject backgroundflag={true} /> */}
      <Footer />
    </>
  );
}
