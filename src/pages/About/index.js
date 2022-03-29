import React from 'react'
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import GotProject from "../../layout/GotProject";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import {
    Uppart, Title, CorpoItems, CorpoItem, ItemImg, ItemTitle, ItemText, Applications, AppTitle,
    AppTextGrp, AppText,
    TeosPart,
    TeosTitlePart,
    TeosTitle,
    TeosText,
    TeosLine,
    SubText,
    TeosBack,
    TransBack,
    BuildBtn,
    ArrowRight,
    TeoPartOut,
    Ourteam,
    MemberItem,
    MemberImg,
    Membername,
    Role,
    TeamMemebers
} from "./about.style";
export default function index() {
    return (
        <>
            <Uppart>
                <Header />
                <Title>About Sarani</Title>
                <SubText>
                    We are a young and rapidly growing agency.<br />
                    Sarani was founded in 2020 in Paris by 3 associates and is made up of 15 specialists,<br />
                    experts in their fields.
                </SubText>
            </Uppart>
            <Applications>
                <AppTitle>Our services</AppTitle>
                <AppTextGrp>
                    <AppText>Virtualization</AppText>
                    <AppText>Branding</AppText>
                </AppTextGrp>
                <AppTextGrp>
                    <AppText>Graphic design</AppText>
                    <AppText>Marketing documents</AppText>
                </AppTextGrp>
                <AppTextGrp>
                    <AppText>Videos</AppText>
                    <AppText>Websites</AppText>
                </AppTextGrp>
                <AppTextGrp>
                    <AppText>Presentations</AppText>
                    <AppText>Consulting</AppText>
                </AppTextGrp>
            </Applications>
            <Ourteam>
                <AppTitle>Our teams</AppTitle>
                <TeamMemebers>
                    <MemberItem>
                        <MemberImg src='img/members/man1.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man2.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man3.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man4.jpg' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man5.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man1.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man2.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man3.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man4.jpg' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                    <MemberItem>
                        <MemberImg src='img/members/man5.png' />
                        <Membername>Jay Bailey</Membername>
                        <Role>CEO & Co-founder</Role>
                        <BsLinkedin className='linkedinIcon' />
                    </MemberItem>
                </TeamMemebers>
            </Ourteam>
            <TeoPartOut>
                <TeosPart>
                    <TransBack>
                        Do you want to discover more of our world?
                        <BuildBtn>
                            VISIT OUR VIRTUAL AGENCY
                            <ArrowRight>
                                <BsArrowRight className="RightIcon" />
                            </ArrowRight>
                        </BuildBtn>
                    </TransBack>
                    <TeosBack />
                </TeosPart>
            </TeoPartOut>
            <GotProject backgroundflag={true} />
            <Footer />
        </>
    )
}
