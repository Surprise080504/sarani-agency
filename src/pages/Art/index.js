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
    TeosBack,
    TransBack
} from "./art.style";
export default function index() {
    return (
        <>
            <Uppart>
                <Header />
                <Title>Art</Title>
            </Uppart>
            <CorpoItems>
                <CorpoItem>
                    <ItemImg src='img/view.jpg' />
                    <ItemTitle>Detailed view</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg src='img/creative.jpg' />
                    <ItemTitle>Endless creativity</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg src='img/view.jpg' />
                    <ItemTitle>Detailed view</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg src='img/creative.jpg' />
                    <ItemTitle>Endless creativity</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg src='img/view.jpg' />
                    <ItemTitle>Detailed view</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
                <CorpoItem>
                    <ItemImg src='img/creative.jpg' />
                    <ItemTitle>Endless creativity</ItemTitle>
                    <ItemText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</ItemText>
                </CorpoItem>
            </CorpoItems>
            <Applications>
                <AppTitle>Applications</AppTitle>
                <AppTextGrp>
                    <AppText>Artists</AppText>
                    <AppText>Museums</AppText>
                </AppTextGrp>
                <AppTextGrp>
                    <AppText>Galleries</AppText>
                    <AppText>Event venues</AppText>
                </AppTextGrp>
                <TeosPart>
                    <TransBack>This project is coming soon</TransBack>
                    <TeosBack />
                </TeosPart>
            </Applications>
            <GotProject backgroundflag={true} />
            <Footer />
        </>
    )
}
