import React from "react";
import {
    BsTwitter,
    BsInstagram,
    BsArrowRight,
    BsChevronDown
} from "react-icons/bs";
import {
    FooterOut,
    Logo,
    Input,
    BuildBtn,
    Copyright,
    ArrowRight,
    LogoPart,
    SocialItem,
    FirstPart,
    AboutPart,
    LangPart,
    AboutTitle,
    AboutText
} from "./Footer.style";
const FooterContainer = () => {
    return (
        <FooterOut>
            <FirstPart>
                <LogoPart>
                    <Logo src='img/logo.png' />
                    <SocialItem>
                        <BsInstagram className="footeritem" />
                        <BsTwitter className="footeritem" />
                    </SocialItem>
                </LogoPart>
                <Input placeholder="your email address" />
                <BuildBtn>
                    SUBSCRIBE TO NEWSLETTER
                    <ArrowRight>
                        <BsArrowRight className="footerRightIcon" />
                    </ArrowRight>
                </BuildBtn>
                <Copyright>Copyright © 2010 - {new Date().getFullYear()} Sarani. All rights reserved.</Copyright>
            </FirstPart>
            <AboutPart>
                <AboutTitle>ABOUT SARANI</AboutTitle>
                <AboutText>Virtual agency</AboutText>
                <AboutText>Projects</AboutText>
                <AboutText>Pricing</AboutText>
                <AboutText>About us</AboutText>
            </AboutPart>
            <AboutPart>
                <AboutTitle>SOLUTIONS</AboutTitle>
                <AboutText>Art</AboutText>
                <AboutText>Retail</AboutText>
                <AboutText>Corporate</AboutText>
                <AboutText>Leisure</AboutText>
            </AboutPart>
            <LangPart>
                <AboutText>Terms & Conditions</AboutText>
                <AboutText>Privacy Policy</AboutText>
                <AboutText>Cookie Policy</AboutText>
                <AboutTitle className="margintop">CHANGE LANGUAGES:</AboutTitle>
                <AboutText>English<BsChevronDown className="downIcon" /></AboutText>
            </LangPart>
        </FooterOut>
    )

}
export default FooterContainer;