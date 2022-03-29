import styled from "styled-components";
import btn_background from "../../assets/img/button-background.png";

export const GotprojectPart = styled.div`
    background: url(${(props) => props.flag ? 'img/ring.jpg' : ''});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    padding: 100px 0 130px 100px;
    @media screen and (max-width:1130px){
        padding: 100px 30px 130px 30px;
    }
`;
export const GotsubText = styled.div`
    font-family: Montserrat;
    font-size: 27px;
    width: 755px;
    margin: 40px 0 70px 0;
    @media screen and (max-width:770px){
        font-size: 25px !important;
        width: 100% !important;
    }
    @media screen and (max-width:560px){
        text-align: center !important;
        font-size: 23px !important;
    }
`;
export const DomainSizepartInput = styled.div`
    
`;
export const CheckGrp = styled.div`
    display: flex;
    @media screen and (max-width:920px){
        flex-direction: column !important;
    }
`;
export const GotInputs = styled.div`
    height: 40px;
    display: flex;
    @media screen and (max-width:680px){
        flex-direction: column !important;
        height: auto !important;
    }
`;
export const GotInputGrp = styled.div`
    width: 300px;
    padding: 0 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    @media screen and (max-width:1020px){
        width: 200px !important;
    }
    @media screen and (max-width:680px){
        width: 100% !important;
        margin-top: 10px !important;
    }
`;
export const GotInputSize = styled.input`
    height: 40px;
    width: ${(props) => props.width};
    font-family: Montserrat;
    font-size: 17px;
    border-style: none;
    :hover, :focus{
        outline: none;
    }
`;
export const GotInput = styled.input`
    height: 40px;
    width: ${(props) => props.width};
    font-family: Montserrat;
    font-size: 17px;
    border-style: none;
    :hover, :focus{
        outline: none;
    }
    @media screen and (max-width:1020px){
        width: 160px !important;
    }
    @media screen and (max-width:680px){
        width: 92% !important;
    }
`;
export const IncreText = styled.div`
    color: #000;
    font-size: 70px;
    font-weight: 900;
    font-family: serif;
    width: 900px;
    line-height: 80px;
    @media screen and (max-width:1000px){
        font-size: 60px !important;
        width: 100% !important;
    }
    @media screen and (max-width:780px){
        font-size: 50px !important;
        width: 100% !important;
    }
    @media screen and (max-width:560px){
        font-size: 40px !important;
        text-align: center !important;
        line-height: 55px !important;
    }
`;
export const DomainPart = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    @media screen and (max-width:480px){
        flex-direction: column !important;
    }
`;
export const DomainsubText = styled.div`
    font-size: 20px;
    font-family: Montserrat;
`;
export const CheckBoxContainer = styled.div`
    font-size: 20px;
    font-family: Montserrat;
    display: flex;
    align-items: center;
    margin-left: 50px;
`;
export const CheckBox = styled.input``;
export const SizePart = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: Montserrat;
    @media screen and (max-width:560px){
        justify-content: center !important;
    }
    @media screen and (max-width:480px){
        flex-direction: column !important;
    }
`;
export const TextArea = styled.textarea`
    border-style: none;
    width: 940px;
    height: 200px;
    font-family: Montserrat;
    padding: 10px;
    margin: 30px 0 100px 0;
    :hover, :focus{
        outline: none;
    }
    @media screen and (max-width:1000px){
        width: 100% !important;
    }
`;
export const HolBtns = styled.div`
    display: flex;
    grid-column-gap: 20px;
    @media screen and (max-width:560px){
        justify-content: center !important;
    }
`;

export const AboutusBtn = styled.div`
    width: 370px;
    height: 80px;
    background-image: url(${btn_background});
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    border-radius: 50px;
    display: flex;
    align-items: center;
    @media screen and (max-width:560px){
        width: 300px !important;
        height: 65px !important;
    }
`;
export const BtnContent = styled.div`
            z-index: 99;
			background: white;
			width: calc(100% * 0.985);
			height: calc(100% * 0.94);
			border-radius: 45px;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
            padding-left:30px;
            &:hover{
			background: transparent;
		}
        &:hover span{
			color: white;
		}
        span{
            font-size: 23px;
			letter-spacing: 5px;
			text-transform:uppercase;
			margin-left: -100px;
			background: linear-gradient(to right,#883484,#ff9374);
			background-clip: text;
			font-weight: 700;
			-webkit-background-clip: text;
			color: transparent;
            @media screen and (max-width:560px){
                font-size: 18px !important;
                margin-left: -70px !important;
            }
    }
`;

export const ArrowRightUs = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #fff2dc;
    align-items: center;
    color: #000;
    margin-left: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0,-50%);
`;