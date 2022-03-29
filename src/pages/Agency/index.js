import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Header from "../../layout/AgencyHeader";
import {
  AgencyOut,
  ModalMain,
  LeftBtnOut,
  OneItemImg,
  ModalItems,
  ModalItem,
  DotOut,
  ModalOut,
  LeftBtn,
  Dots,
  Dot,
  ModalBody,
  ModalText,
  ModalTitle,
} from "./agency.style";

export default function Agency() {
  const [modalflag, setModalflag] = useState(true);
  const [dotcolor, setDotcolor] = useState(true);
  return (
    <AgencyOut>
      <Header />
      {modalflag && (
        <ModalOut>
          <ModalMain>
            <AiOutlineClose
              className="agencyclose"
              onClick={() => setModalflag(!modalflag)}
            />
            <LeftBtnOut>
              <LeftBtn onClick={() => setDotcolor(true)}>
                <BsArrowLeft
                  className={!dotcolor ? "modalleft" : "modalleftgrey"}
                />
              </LeftBtn>
            </LeftBtnOut>
            {dotcolor && (
              <ModalBody>
                <ModalTitle>Welcome to Sarani's virtual agency</ModalTitle>
                <ModalText>
                  We are a design studio specialized in building virtual spaces.
                  <br />
                  We have a wide array of services including Graphic design, Web{" "}
                  <br />
                  design, interior design, Video making, and many more...
                  <br />
                  <br />
                  This virtual space is a good example of what we are capable of
                  in terms
                  <br />
                  of virtual reality. Enjoy your visit!
                </ModalText>
              </ModalBody>
            )}
            {!dotcolor && (
              <ModalBody>
                <ModalTitle>Explore our agency</ModalTitle>
                <ModalItems>
                  <ModalItem>
                    <OneItemImg src="img/agency/ttt.png" />
                    <br />
                    Navigate
                    <br />
                    between spaces
                    <br />
                    thanks to the
                    <br />
                    map
                  </ModalItem>
                  <ModalItem>
                    <OneItemImg src="img/agency/ttt.png" />
                    <br />
                    Click on the
                    <br />
                    floating titles
                    <br />
                    to discover
                    <br />
                    more
                  </ModalItem>
                  <ModalItem>
                    <OneItemImg src="img/agency/ttt.png" />
                    <br />
                    Follow the line
                    <br />
                    below to know
                    <br />
                    our design
                    <br />
                    process
                  </ModalItem>
                </ModalItems>
              </ModalBody>
            )}
            <LeftBtnOut>
              <LeftBtn onClick={() => setDotcolor(false)}>
                <BsArrowRight
                  className={dotcolor ? "modalleft" : "modalleftgrey"}
                />
              </LeftBtn>
            </LeftBtnOut>
            <DotOut>
              <Dots>
                <Dot className={dotcolor ? "dotwhite" : "dotgrey"} />
                <Dot className={!dotcolor ? "dotwhite" : "dotgrey"} />
              </Dots>
            </DotOut>
          </ModalMain>
        </ModalOut>
      )}
    </AgencyOut>
  );
}
