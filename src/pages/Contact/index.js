import React from 'react'
import Header from "../../layout/HeaderDark";
import Footer from "../../layout/Footer";
import GotProject from "../../layout/GotProject";
import {
    ContactContainer,
    HeaderContainer
} from "./contact.style";
export default function index() {
    return (
        <>
            <ContactContainer>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
                <GotProject backgroundflag={false} />
            </ContactContainer>
            <Footer />
        </>
    )
}
