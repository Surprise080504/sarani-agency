import styled from "styled-components";
import FooterBack from "../../assets/img/footer-image.png";
export const FooterOut = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 100px;
    background-image: url(${FooterBack});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% 100%;
    @media screen and (max-width:1350px){
        padding: 100px 50px !important;
    }
    @media screen and (max-width:1250px){
        display: grid !important;
        grid-template-columns: auto auto !important;
        grid-row-gap: 50px;
        padding: 100px !important;
    }
    @media screen and (max-width:880px){
        padding: 100px 50px !important;
    }
    @media screen and (max-width:780px){
        display: flex !important;
        flex-direction: column !important;
        padding-left: 200px !important;
    }
    @media screen and (max-width:700px){
        padding-left: 100px !important;
    }
    @media screen and (max-width:560px){
        padding-left: 50px !important;
    }
`;
export const FirstPart = styled.div`
    width: 365px;
    @media screen and (max-width:780px){
        order: 4 !important;
    }
    @media screen and (max-width:560px){
        width: 100% !important;
    }
`;
export const AboutPart = styled.div`
`;
export const LangPart = styled.div`
    margin-top: -20px;
`;
export const Logo = styled.img``;
export const SocialItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;
export const LogoPart = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
export const Input = styled.input`
    width: 100%;
    margin: 50px 0 30px 0;

    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.6);
    background: transparent;
    color: #fff;
    letter-spacing: 1px;
    font-family: Montserrat;
    :hover, :focus{
        outline: none;
    }
    ::-webkit-input-placeholder{
        font-style: italic;
        color: #fff;
        font-family: Montserrat;
    }
`;

export const BuildBtn = styled.div`
    display: flex;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    padding: 0 8px 0 30px;
    letter-spacing: 3px;
    border-radius: 40px;
    height: 50px;
    font-family: Montserrat_bold;
    align-items: center;
    border: 1px solid rgba(255,255,255,0.6);
    font-weight: 500;
    background-color: transparent;
    @media screen and (max-width:560px){
        width: 365px !important;
    }
    @media screen and (max-width:470px){
        width: 100% !important;
    }
`;
export const ArrowRight = styled.div`
    min-width: 35px;
    min-height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: rgba(255,255,255,0.3);
    align-items: center;
    color: #fff;
    margin-left: 20px;
`;
export const Copyright = styled.div`
    color: rgba(255,255,255,0.6);
    font-family: Montserrat;
    font-style: italic;
    margin-top: 50px;
`;
export const AboutTitle = styled.div`
    font-family: Montserrat;
    color: #fff;
    font-weight: 900;
    font-size: 18px;
    letter-spacing: 1px;
`;
export const AboutText = styled.div`
    font-family: Montserrat;
    color: #fff;
    cursor: pointer;
    letter-spacing: 1px;
    margin-top: 20px;
    font-size: 16px;
`;