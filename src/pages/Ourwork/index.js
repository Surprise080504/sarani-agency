import React from 'react'
import Header from "../../layout/HeaderDark";
import Footer from "../../layout/Footer";
import GotProject from "../../layout/GotProject";
import {
    ProjectRoot,
    ProjectTitle,
    HolePart,
    HoleText,
    HoleImg,
    FelPart,
    FelItem,
    FelImg,
    FelText,
    DesignPart,
    DesignImg,
    WorkBack,
    Mark
} from "./work.style";
export default function Project() {
    return (
        <>
            <ProjectRoot>
                <Header />
                <ProjectTitle>Our work</ProjectTitle>
                <HolePart>
                    <HoleImg>
                        <Mark />
                    </HoleImg>
                    <HoleText>TEOS Solutions for Sony</HoleText>
                </HolePart>
                <WorkBack />
                <FelPart>
                    <FelItem>
                        <FelImg height='600px' src='img/restaurantwork.PNG'>
                            <Mark />
                        </FelImg>
                        <HoleText>Felicie restaurant</HoleText>
                    </FelItem>
                    <FelItem>
                        <FelImg height='500px' src='img/desi.png' />
                        <HoleText>Design project</HoleText>
                    </FelItem>
                </FelPart>
                <DesignPart>
                    <DesignImg />
                    <HoleText>Design project</HoleText>
                </DesignPart>
                <FelPart>
                    <FelItem>
                        <FelImg height='500px' src='img/treeproduct.jpg' />
                        <HoleText>Design project</HoleText>
                    </FelItem>
                    <FelItem>
                        <FelImg height='600px' src='img/bottle.jpg' />
                        <HoleText>Design project</HoleText>
                    </FelItem>
                </FelPart>
            </ProjectRoot>
            <GotProject backgroundflag={true} />
            <Footer />
        </>
    )
}
