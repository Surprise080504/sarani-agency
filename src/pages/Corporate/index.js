import React from 'react'
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import GotProject from "../../layout/GotProject";
import {
    Uppart, Title, CorpoItems, CorpoItem, ItemImg, ItemTitle, ItemText, Applications, AppTitle,
    AppTextGrp, AppText,
    TeosPart,
    TeosTitlePart,
    TeosTitle,
    TeosText,
    TeosLine,
    TeosBack
} from "./corporate.style";
export default function index() {
    return (
        <>
            <Uppart>
                <Header />
                <Title>Corporate</Title>
            </Uppart>
            <CorpoItems>
                <CorpoItem>
                    <ItemImg />
                    <ItemTitle>Prepare a visit</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg />
                    <ItemTitle>Prepare a visit</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg />
                    <ItemTitle>Prepare a visit</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
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
                    <TeosBack src='img/home.PNG' />
                </TeosPart>
            </Applications>
            <GotProject backgroundflag={true} />
            <Footer />
        </>
    )
}
