import React from "react";
import {
    GotprojectPart,
    GotsubText,
    GotInputs,
    GotInputGrp,
    GotInput,
    DomainPart,
    DomainsubText,
    CheckBoxContainer,
    CheckBox,
    SizePart,
    TextArea,
    IncreText,
    HolBtns,
    AboutusBtn,
    BtnContent,
    ArrowRightUs,
    GotInputSize,
    DomainSizepartInput,
    CheckGrp
} from "./project.style";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const ProjectContainer = ({ backgroundflag }) => {
    return (
        <GotprojectPart flag={backgroundflag}>
            <IncreText>Got a project in mind ?</IncreText>
            <GotsubText>
                We offer tailor-made solutions for your specific needs, no matter the
                size or scale of your business.
                Fill the form below and we will contact you soon!
            </GotsubText>
            <GotInputs>
                <GotInputGrp>
                    <GotInput placeholder="Full name" width={"225px"} />
                    <FaRegUser className="userIcon" />
                </GotInputGrp>
                <GotInputGrp>
                    <GotInput placeholder="Email" width={"225px"} />
                    <MdOutlineMail className="userIcon" />
                </GotInputGrp>
                <GotInputGrp>
                    <GotInput placeholder="Phone" width={"225px"} />
                    <AiOutlinePhone className="userIcon" />
                </GotInputGrp>
            </GotInputs>
            <DomainPart>
                <DomainsubText>Domain of application: </DomainsubText>
                <CheckGrp>
                    <CheckBoxContainer>
                        <CheckBox type="checkbox" className="checkboxcontainer" /> Art
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type="checkbox" className="checkboxcontainer" /> Retail
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type="checkbox" className="checkboxcontainer" /> Corporate
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type="checkbox" className="checkboxcontainer" /> Leisure
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <CheckBox type="checkbox" className="checkboxcontainer" /> Other
                    </CheckBoxContainer>
                </CheckGrp>
            </DomainPart>
            <SizePart>
                <DomainsubText>Size of the space wanted: </DomainsubText>
                <DomainSizepartInput>
                    <span style={{ marginLeft: "30px" }}>
                        <GotInputSize width={"80px"} />
                    </span>
                    <span style={{ marginLeft: "10px" }}>m</span>
                </DomainSizepartInput>
            </SizePart>
            <TextArea />
            <HolBtns>
                <AboutusBtn>
                    <BtnContent>
                        <span>SEND MESSAGE</span>
                        <ArrowRightUs>
                            <BsArrowRight className="RightIconYellow" />
                        </ArrowRightUs>
                    </BtnContent>
                </AboutusBtn>
            </HolBtns>
        </GotprojectPart>
    )

}
export default ProjectContainer;